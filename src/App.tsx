import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


const App: React.FC = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar/>
            {/*<Profile/>*/}
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

                    {/*<Route path="/news" element={<News/>}/>*/}
                    {/*<Route path="/music" element={<Music/>}/>*/}
                    {/*<Route path="/settings" element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
