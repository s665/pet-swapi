import React from 'react';

import style from './style.module.scss'
import {Link} from "react-router-dom";

const Header = ({toggleNavBar}) => {

    return (
        <div className={style.header}>
            <div className={style.logo}>
                <Link to="/">Star Wars</Link>
            </div>
            <div className={style.burger}
                 onClick={toggleNavBar}>
                <span> </span>
            </div>
        </div>
    );
}

export default Header;