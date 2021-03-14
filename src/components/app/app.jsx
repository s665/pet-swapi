import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from "../pages/home";
import Planets from "../pages/planets";
import Starships from "../pages/starships";
import People from "../pages/people";
import NavGroup from "../nav-group";
import ItemDetails from "../item-details";

const App = () => {
    return (
        <React.Fragment>
            <NavGroup/>
            <Switch>
                <Route path="/"
                       exact
                       component={Home}/>
                <Route path="/planets/:id?"
                       component={Planets}/>
                <Route path="/starships/"
                       component={Starships}/>
                <Route path="/people/"
                       component={People}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;