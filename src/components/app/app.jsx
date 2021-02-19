import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from "../pages/home";
import Planets from "../pages/planets";
import Starships from "../pages/starships";
import People from "../pages/people";
import NavGroup from "../nav-group";
import SwapiService from "../../services/swapi-service";

export const SwapiContext = React.createContext()
const swapi = new SwapiService()

const App = () => {

    return (
        <SwapiContext.Provider value={swapi}>
            <Router>
                <NavGroup/>
                <Switch>
                    <Route path="/"
                           exact
                           component={Home}/>
                    <Route path="/planets/"
                           component={Planets}/>
                    <Route path="/starships/"
                           component={Starships}/>
                    <Route path="/people/"
                           component={People}/>
                </Switch>
            </Router>
        </SwapiContext.Provider>
    );
}

export default App;