import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {ActionTypes, RootStateType, StoreType} from "./redux/types";

type AppStateType = {
    appState: RootStateType
    dispatch: (action: ActionTypes) => void

}

const App: React.FC<AppStateType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*<Profile/>*/}
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile"
                           element={<Profile profilePageData={props.appState.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogsPageData={props.appState.dialogPage} dispatch={props.dispatch}/>}/>
                    {/*<Route path="/news" element={<News/>}/>*/}
                    {/*<Route path="/music" element={<Music/>}/>*/}
                    {/*<Route path="/settings" element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
