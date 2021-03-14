import React from 'react';
import Slider from "../../slider";

import {mapPeopleMethods, mapPlanetsMethods, mapStarshipsMethods} from "../sw-methods";
import {renderPeople, renderPlanets, renderStarships} from "../sw-item-render";

import withSwapiData from "../../hoc-helpers/withSwapiData";
import withRenderFunction from "../../hoc-helpers/withRenderFunction";
import compose from "../../../utils/compose";


const PlanetsSlider = compose(
    withRenderFunction(renderPlanets),
    withSwapiData(mapPlanetsMethods)
)(Slider)

const PeopleSlider = compose(
    withRenderFunction(renderPeople),
    withSwapiData(mapPeopleMethods)
)(Slider)

const StarshipsSlider = compose(
    withRenderFunction(renderStarships),
    withSwapiData(mapStarshipsMethods)
)(Slider)

export {
    PlanetsSlider,
    PeopleSlider,
    StarshipsSlider
}
