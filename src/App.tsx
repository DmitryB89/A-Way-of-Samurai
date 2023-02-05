import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import { LoginContainer } from "./Components/Login/Login";
import ProfileContainer, {ProfileContainerAPIComponent} from "./Components/Profile/ProfileContainer";
import {compose} from "redux";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import {withRouter} from "./Components/withRouter";
import {AppStateType} from "./redux/redux-store";

import {connect} from "react-redux";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./Components/Preloader/Preloader";

export type AppContainerPropsType = MapStatePropsType & DispatchPropsType

type MapStatePropsType = {
    isInitialized:boolean
}

type DispatchPropsType = {
    initializeApp:() => void
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    isInitialized:state.app.isInitialized
})



export class App extends React.Component<AppContainerPropsType> {

    componentDidMount() {

        this.props.initializeApp()
    }

    render() {
if (!this.props.isInitialized)
{return <Preloader/>}

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        {/*<Route path="/profile/"*/}
                        {/*       element={<ProfileContainer/>}/>*/}
                        <Route path="/profile/:userId?"
                               element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer/>}/>
                        <Route path="/users/*"
                               element={<UsersContainer/>}/>
                        <Route path="/login"
                               element={<LoginContainer/>}/>

                        {/*<Route path="/news" element={<News/>}/>*/}
                        {/*<Route path="/music" element={<Music/>}/>*/}
                        {/*<Route path="/settings" element={<Settings/>}/>*/}
                    </Routes>
                </div>
            </div>
        );
    }
}

// @ts-ignore
// export default compose(
//     withRouter,
//     connect(mapStateToProps, {getAuthUserData})(App)
// )

export const AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter,
)(App)