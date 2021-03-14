import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from "../pages/home";
import Planets from "../pages/planets";
import Starships from "../pages/starships";
import People from "../pages/people";
import NavGroup from "../nav-group";
import {PersonDetails} from "../sw-components/sw-item-details";

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
                <Route path="/starships/:id?"
                       component={Starships}/>
                <Route path="/people/"
                       component={People}
                       exact/>
                <Route path="/people/:id"
                       render={({match}) => {
                           const {id} = match.params
                           return (
                               <div className="fs-center-container">
                                   <div className="container">
                                       <PersonDetails itemId={id}/>
                                   </div>
                               </div>
                           )
                       }}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;