import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

export type DataPropsType = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
    posts: PostsPropsType[]

}

export type DialogsPropsType = {
    id: number
    name: string
}
export type MessagesPropsType = {
    id: number
    message: string
}

export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}

const App:React.FC<DataPropsType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*<Profile/>*/}
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile posts={props.posts}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    {/*<Route path="/news" element={<News/>}/>*/}
                    {/*<Route path="/music" element={<Music/>}/>*/}
                    {/*<Route path="/settings" element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
