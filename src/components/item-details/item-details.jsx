import React from 'react';

import Spinner from "../spinner";
import useItem from "../hook/useItem";
import ErrorIndicator from "../errod-indicator";

import style from './style.module.scss';

const ItemDetails = ({itemId, renderFunction, mapMethods}) => {

    const res = useItem(itemId, mapMethods)

    if (!itemId) {
        return <div>Select an item from the list</div>
    }

    const {data, loading, error} = res
    const description = data ? renderFunction(data) : null
    const loadingIndicator = loading ? <Spinner/> : null
    const errorIndicator = error ? <ErrorIndicator/> : null

    return (
        <div className={style.itemDetails}>
            {description}
            {loadingIndicator}
            {errorIndicator}
        </div>
    );
}

export default ItemDetails;