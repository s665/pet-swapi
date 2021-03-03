import {FETCH_DATA_FAILURE, FETCH_DATA_SUCCES, FETCH_DATA_REQUEST} from "../types";

const dataRequested = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

const dataLoaded = (data, essence) => {
    return {
        type: FETCH_DATA_SUCCES,
        payload: data,
        essence
    }
}

const dataError = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

export const fetchData = (essence, swapiMethos) => (dispatch) => {
    dispatch(dataRequested())
    swapiMethos()
        .then(data => dispatch(dataLoaded(data, essence)))
        .catch(error => dispatch(dataError(error)))
}