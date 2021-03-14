import compose from "../../../utils/compose";
import ItemDetails from "../../item-details/item-details";
import withRenderFunction from "../../hoc-helpers/withRenderFunction";
import {renderPeople, renderPlanets, renderStarships} from "../sw-item-render";
import withSwapiService from "../../hoc-helpers/withSwapiService";
import {mapPersonMethods, mapPlanetMethods, mapStarshipMethods} from "../sw-methods";
import {withRouter} from "react-router-dom";

export const PlanetDetail = compose(
    withSwapiService(mapPlanetMethods),
    withRenderFunction(renderPlanets)
)(ItemDetails)

export const StarshipDetail = compose(
    withRouter,
    withSwapiService(mapStarshipMethods),
    withRenderFunction(renderStarships)
)(ItemDetails)

export const PersonDetails = compose(
    withRouter,
    withSwapiService(mapPersonMethods),
    withRenderFunction(renderPeople)
)(ItemDetails)