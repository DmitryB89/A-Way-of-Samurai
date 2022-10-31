import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Alena'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Egor'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Ksenia'},
]

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your progress?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Nice to hear ya'},
    {id: 5, message: 'Good evening'},
    {id: 6, message: 'Have a nice day'},
]

const posts = [
    {id: 1, message: 'How are you?', likesCount: 12},
    {id: 2, message: 'It is my first post', likesCount: 10},
]


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs} messages={messages} posts={posts}/>
        </BrowserRouter>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
