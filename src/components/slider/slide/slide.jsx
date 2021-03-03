import React from 'react';

import style from './style.module.scss';

const Slide = ({item, renderFunction}) => {
    return (
        <div className={style.slide}>
            {renderFunction(item)}
        </div>
    );
}

export default Slide;