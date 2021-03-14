import ItemList from "../../item-list";
import withSwapiData from "../../hoc-helpers/withSwapiData";
import {mapPeopleMethods, mapPlanetsMethods, mapStarshipsMethods} from "../sw-methods";
import compose from "../../../utils/compose";


const PeopleItemList = compose(
    withSwapiData(mapPeopleMethods)
)(ItemList)

const PlanetsItemList = compose(
    withSwapiData(mapPlanetsMethods)
)(ItemList)

const StarshipsItemList = compose(
    withSwapiData(mapStarshipsMethods)
)(ItemList)

export {
    PeopleItemList,
    PlanetsItemList,
    StarshipsItemList
}