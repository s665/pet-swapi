import React from 'react';

import {StarshipsItemList} from "../../sw-components/sw-item-list";
import {StarshipsSlider} from "../../sw-components/sw-slider/sw-sliders";
import Row from "../../row";
import {StarshipDetail} from "../../sw-components/sw-item-details";

const Starships = ({match, history}) => {

    const {id} = match.params

    return (
        <div className="fs-center-container">
            <StarshipsSlider isAutoPlay
                             isControl={false}/>
            <div className="container">
                <Row
                    left={<StarshipsItemList
                        onItemSelected={(id) => history.push(id)}/>}
                    right={<StarshipDetail itemId={id}/>}/>

            </div>
        </div>

    )
}

export default Starships;