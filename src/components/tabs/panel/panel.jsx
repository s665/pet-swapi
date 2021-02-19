import React from 'react';

import style from './style.module.scss'

const Panel = ({children, changeIdx, idx}) => {


    return (
        <button className={style.panel}
                onClick={(changeIdx(idx))}>
            {children}
        </button>

    );
}

export default Panel;