import React, {useContext} from 'react';

import style from './style.module.scss'
import {TabIndex} from "../tabs";

const Panel = ({children, changeIdx, idx}) => {

    const currentIdx = useContext(TabIndex)
    const activeClass = idx === currentIdx ? style.active : null

    return (
        <button className={`${style.panel} ${activeClass}`}
                onClick={changeIdx(idx)}>
            {children}
        </button>

    );
}

export default Panel;