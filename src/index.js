import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css'
import './assets/style/global.scss'

import store from "./store";
import {Provider} from "react-redux"

import App from "./components/app";
import {BrowserRouter as Router} from "react-router-dom";
import SwapiService from "./services/swapi-service";
import ErrorBoundary from "./components/error-boundary";

export const SwapiContext = React.createContext()
const swapi = new SwapiService()



ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <SwapiContext.Provider value={swapi}>
                <Router>
                    <App/>
                </Router>
            </SwapiContext.Provider>
        </ErrorBoundary>
    </Provider>
    ,
    document.getElementById('root')
);