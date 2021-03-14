import React from 'react';
import Image from "../../image";
import style from "../../slider/slide/style.module.scss";


export const renderPlanets = ({diameter, rotationPeriod, population, name, id}) => {
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

export const renderPeople = ({id, name, gender, birthYear, eyeColor, }) => {
    return (
        <>
            <Image src={`image`}/>
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

export const renderStarships = ({id, name, model, manufacturer, length, crew, passengers}) => {
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