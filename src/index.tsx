import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from "./redux/types";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";
import {App, AppContainer} from "./App";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


    root.render(
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
    )
