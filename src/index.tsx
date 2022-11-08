import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {RootStateType} from "./redux/types";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const renderTree = (state: RootStateType) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </BrowserRouter>

        </React.StrictMode>
    );
}
renderTree(store.getState())
store.subscribe(()=> {
    let state = store.getState()
    renderTree(state)
})