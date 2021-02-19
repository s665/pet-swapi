import React from 'react';
import style from './style.module.scss';

import icon from '../../assets/image/error.png'

const ErrorIndicator = () => {
    return (
        <div className={style.errorIndicator}>
            <div className={style.content}>
                <img src={icon} alt=""/>
                <h4>Ooops! An error has occurred</h4>
                <span>Don't underestimate the Power.</span>
                <span className={style.yoda}>Control, control, you must learn to control!</span>
            </div>
        </div>
    );
}

export default ErrorIndicator;