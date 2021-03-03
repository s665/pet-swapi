import {FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCES} from "../types";

const initialState = {
    loading: true,
    error: false,
    planets: null,
    people: null,
    starships: null
}

const swapi = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST: {
            return {
                ...state
            }
        }
        case FETCH_DATA_SUCCES: {
            return {
                ...state,
                loading: false,
                error: false,
                [action.essence]: action.payload,
            }
        }
        case FETCH_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state
    }
}

export default swapi