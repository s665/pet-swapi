import React from 'react';

import style from './style.module.scss';
import withSwapiData from "../../hoc-helpers/withSwapiData";
import {mapStarshipsMethods} from "../../sw-components/sw-slider/sw-sliders";

const Starships = ({data}) => {

    return (
        <div>Starships</div>
    );
}

export default withSwapiData(mapStarshipsMethods)(Starships);