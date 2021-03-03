import React from 'react';
import style from './style.module.scss';
import Slide from "./slide";
import useSliderControl from "../hook/useSliderControl";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faRandom, faStepBackward, faStepForward, faStop} from "@fortawesome/free-solid-svg-icons";

const Slider = ({data, renderFunction}) => {

    const slides = data.map((item, idx) => {
        return <Slide key={idx}
                      item={item}
                      renderFunction={renderFunction}/>
    })

    const {
        play,
        prev,
        next,
        toggleRandom,
        visibleSlide,
        random,
        autoPlay
    } = useSliderControl(data.length)
    
    const playButton = autoPlay
        ? <FontAwesomeIcon icon={faStop}/>
        : <FontAwesomeIcon icon={faPlay}/>

    return (
        <div className={style.slider}>
            <div className={style.wrapSlide}
                 style={visibleSlide}>
                {slides}
            </div>
            <div className={style.control}>
                <button onClick={prev}>
                    <FontAwesomeIcon icon={faStepBackward}/>
                </button>
                <button onClick={play}
                        className={style.play}>
                    {playButton}
                </button>
                <button onClick={next}>
                    <FontAwesomeIcon icon={faStepForward}/>
                </button>
                <button onClick={toggleRandom}
                        className={random ? style.active : null}>
                    <FontAwesomeIcon icon={faRandom}/>
                </button>
            </div>
        </div>
    );
}

export default Slider;