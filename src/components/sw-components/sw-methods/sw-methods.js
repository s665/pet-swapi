export const mapPlanetsMethods = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets,
        essence: 'planets',
    }
}

export const mapPeopleMethods = (swapiService) => {
    return {
        getData: swapiService.getAllPeople,
        essence: 'people',
    }
}

export const mapStarshipsMethods = (swapiService) => {
    return {
        getData: swapiService.getAllStarships,
        essence: 'starships',
    }
}

export const mapPlanetMethods = (swapiService) => {
    return {
        getData: (id) => swapiService.getPlanet(id)
    }
}

export const mapStarshipMethods = (swapiService) => {
    return {
        getData: (id) => swapiService.getStarship(id)
    }
}

export const mapPersonMethods = (swapiService) => {
    return {
        getData: (id) => swapiService.getPerson(id)
    }
}