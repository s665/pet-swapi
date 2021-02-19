import React, {useContext} from 'react';
import {Tabs, Tab, Panel} from '../../tabs'

import style from './style.module.scss'
import RandomItem from "../../random-item";

const Home = () => {

    return (
        <div className={style.homePage}>
            <Tabs>
                <Tab><RandomItem/></Tab>
                <Tab>
                    <div style={{background: 'blue', width: '100%', height: '400px'}}/>
                </Tab>
                <Tab/>

                <Panel>Planets</Panel>
                <Panel>People</Panel>
                <Panel>Starships</Panel>
            </Tabs>
        </div>
    );
}

export default Home;