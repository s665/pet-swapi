import React from 'react';
import {Tabs, Tab, Panel} from '../../tabs'

import style from './style.module.scss'
import {PeopleSlider, PlanetsSlider, StarshipsSlider} from "../../sw-components/sw-slider/sw-sliders";

const Home = () => {

    return (
        <div className={style.homePage}>
            <Tabs>
                <Tab>
                    <PlanetsSlider/>
                </Tab>
                <Tab>
                    <PeopleSlider/>
                </Tab>
                <Tab>
                    <StarshipsSlider/>
                </Tab>

                <Panel>Planets</Panel>
                <Panel>People</Panel>
                <Panel>Starships</Panel>
            </Tabs>
        </div>
    );
}

export default Home;