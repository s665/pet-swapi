import React from 'react';
import Image from "../../image";
import style from "../../slider/slide/style.module.scss";
import Slider from "../../slider";
import useGetSwapiEssenceList from "../../hook/useGetSwapiEssenceList";
import Spinner from "../../spinner";
import withSwapiData from "../../hoc-helpers/withSwapiData";
import withRenderFunction from "../../hoc-helpers/withRenderFunction";
import compose from "../../hoc-helpers/compose";

//Methods for essence

const mapPlanetsMethods = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets,
        essence: 'planets',
    }
}

const mapPeopleMethods = (swapiService) => {
    return {
        getData: swapiService.getAllPeople,
        essence: 'people',
    }
}

const mapStarshipsMethods = (swapiService) => {
    return {
        getData: swapiService.getAllStarships,
        essence: 'starships',
    }
}

//Render function

const renderPlanets = ({diameter, rotationPeriod, population, name, id}) => {
    return (
        <>
            <Image src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div className={style.description}>
                <h1>{name}</h1>
                <ul>
                    <li>Diameter: {diameter}</li>
                    <li>Rotation period: {rotationPeriod}</li>
                    <li>Population: {population}</li>
                </ul>
            </div>
        </>
    )
}

const renderPeople = ({id, name, gender, birthYear, eyeColor}) => {
    return (
        <>
            <Image src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
            <div className={style.description}>
                <h1>{name}</h1>
                <ul>
                    <li>Gender: {gender}</li>
                    <li>Birth year: {birthYear}</li>
                    <li>Eye color: {eyeColor}</li>
                </ul>
            </div>
        </>
    )
}

const renderStarships = ({id, name, model, manufacturer, length, crew, passengers}) => {
    return (
        <>
            <Image src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}/>
            <div className={style.description}>
                <h1>{name}</h1>
                <ul>
                    <li>Model: {model}</li>
                    <li>Manufacturer: {manufacturer}</li>
                    <li>Length: {length}</li>
                    <li>Crew: {crew}</li>
                    <li>Passengers: {passengers}</li>
                </ul>
            </div>
        </>
    )
}

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
