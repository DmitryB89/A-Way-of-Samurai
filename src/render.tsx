import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, RootStateType} from "./redux/state";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const renderTree = (state:RootStateType) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} addPostCallback={addPost}/>
            </BrowserRouter>

        </React.StrictMode>
    );
}