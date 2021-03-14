import React from 'react';

import style from './style.module.scss'
import {PlanetsItemList} from "../../sw-components/sw-item-list";
import {PlanetsSlider} from "../../sw-components/sw-slider/sw-sliders";
import Row from "../../row";
import {withRouter} from "react-router-dom";
import {PlanetDetail} from "../../sw-components/sw-item-details";

const Planets = ({history, match}) => {

    const {id} = match.params

    return (
        <div className={style.planets}>
            <PlanetsSlider autoPlayAndNoControl/>
            <Row left={
                <PlanetsItemList onItemSelected={(id) => history.push(id)}/>
                }
                 right={
                     <PlanetDetail itemId={id}/>
                 }
            />

        </div>
    );
}

export default withRouter(Planets);