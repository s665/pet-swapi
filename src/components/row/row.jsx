import React from 'react';

import style from './style.module.scss';

const Row = ({left, right}) => {

    const leftPanel = (
        <div className={style.left}>
            {left}
        </div>
    )

    const rightPanel = (
        <div className={style.right}>
            {right}
        </div>
    )

    return (
        <div className={style.row}>
            {leftPanel}
            {rightPanel}
        </div>
    );
}

export default Row;