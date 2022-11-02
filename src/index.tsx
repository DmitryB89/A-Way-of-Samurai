import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {RootStateType, store} from "./redux/state";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const renderTree = (state: RootStateType) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} addPostCallback={store.addPost.bind(store)} changeNewTextCallback={store.updateNewPostText.bind(store)} />
            </BrowserRouter>

        </React.StrictMode>
    );
}
renderTree(store.getState())
store._subscribe(renderTree)