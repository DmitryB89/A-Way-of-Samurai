import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from "./redux/types";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const renderTree = (state:RootStateType) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                <App />
                </Provider>
            </BrowserRouter>

        </React.StrictMode>
    );
}
renderTree(store.getState())
store.subscribe(()=> {
    let state = store.getState()
    renderTree(state)
})