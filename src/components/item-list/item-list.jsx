import React from 'react';

import style from './style.module.scss'

const ItemList = (props) => {

    const {data, onItemSelected} = props

    const items = data.map((item) => {
        const {id} = item
        return (
            <li key={id}
                onClick={ () => onItemSelected(id) }>
                {item.name}
            </li>
        )
    })

    return (
        <div className={style.itemList}>
            <ul className={style.list}>
                {items}
            </ul>
        </div>
    );
}

export default ItemList;