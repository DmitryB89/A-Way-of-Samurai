import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {Users} from "./Components/Users/Users";

const App: React.FC = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*<Profile/>*/}
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile"
                           element={<Profile/>}/>
                    <Route path="/dialogs/*"
                           element={<DialogsContainer/>}/>
                    <Route path="/users/*"
                           element={<Users/>}/>
                    {/*<Route path="/news" element={<News/>}/>*/}
                    {/*<Route path="/music" element={<Music/>}/>*/}
                    {/*<Route path="/settings" element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
