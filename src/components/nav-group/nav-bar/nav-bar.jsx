import React, {useEffect, useState} from 'react';

import style from './style.module.scss';
import {NavLink} from "react-router-dom";

const NavBar = ({toggleNavBar, showNavBar}) => {


    const showStyle = {transform: 'translateX(0px)', transition: "transform .5s"}
    const unShowStyle = {transform: 'translateX(400px)', transition: "transform .5s"}

    return (
        <>
            <div className={style.navBar} style={showNavBar ? showStyle : unShowStyle}>
                <div className={style.header}>
                    <h1>Menu</h1>
                    <span className={style.close}
                          onClick={toggleNavBar}/>
                </div>
                <ul className={style.navList}>
                    <li className={style.navItem}>
                        <NavLink to='/planets/'
                                 activeClassName={style.active}>
                            Planets
                        </NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink to='/people/'
                                 activeClassName={style.active}>
                            People
                        </NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink to='/starships/'
                                 activeClassName={style.active}>
                            Starships</NavLink>
                    </li>
                </ul>
            </div>
            {
                showNavBar &&
                <div className={style.cover}
                     onClick={toggleNavBar}/>
            }

        </>
    );
}

export default NavBar;