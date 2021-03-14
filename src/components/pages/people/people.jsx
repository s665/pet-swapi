import React from 'react';
import {withRouter} from "react-router-dom";

import {PeopleSlider} from "../../sw-components/sw-slider/sw-sliders";
import {PeopleItemList} from "../../sw-components/sw-item-list";

const People = ({history}) => {

    return (
        <div className="fs-center-container">
            <PeopleSlider isAutoPlay
                          isControl={false}/>
            <div className="container">
                <PeopleItemList onItemSelected={(id) => history.push(id)}/>
            </div>

        </div>
    );
}

export default withRouter(People);