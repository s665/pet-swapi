import {useCallback, useEffect, useState} from "react";

const useSliderControl = (slideLength) => {

    const defaultTimeInterval = 10000

    const [slide, setSlide] = useState(1)
    const [random, setRandom] = useState(false)
    const [autoPlay, setAutoplay] = useState(false)
    const [loopSlide, setLoopSlide] = useState(false)

    const visibleSlide = {
        transform: `translateX(-${(slide - 1) * 100}%)`,
    }

    const generateRandomNumber = useCallback(() => {
        return Math.floor(Math.random() * (slideLength - 1) + 2)
    }, [slideLength])

    const setRandomSlide = useCallback(() => {
        const rndNumber = generateRandomNumber()
        setSlide(prevState => {
            return prevState === rndNumber
                ? --prevState
                : rndNumber
        })
    }, [generateRandomNumber])

    const next = () => {
        if (random) {
            setRandomSlide()
        } else if (loopSlide) {
            setSlide(prevState => prevState === slideLength ? 1 : ++prevState)
        } else {
            setSlide(prevState => prevState === slideLength ? prevState : ++prevState)
        }
    }

    const prev = () => {
        if (random) {
            setRandomSlide()
        } else if (loopSlide) {
            setSlide(prevState => prevState > 1 ? --prevState : slideLength)
        }
        else {
            setSlide(prevState => prevState > 1 ? --prevState : prevState)
        }
    }

    const toggleRandom = () => {
        setRandom(prevState => !prevState)
    }

    const play = () => {
        setAutoplay(prevState => !prevState)
    }

    const loop = () => {
        setLoopSlide(prevState => !prevState)
    }

    useEffect(() => {
        let interval
        if (autoPlay) {
            if (random) {
                interval = setInterval(() => {
                    setRandomSlide()
                }, defaultTimeInterval)
            } else {
                interval = setInterval(() => {
                    setSlide(prevState => prevState === slideLength ? 1 : ++prevState)
                }, defaultTimeInterval)
            }
        }
        return () => {
            clearInterval(interval)
        }
    }, [autoPlay, random, setRandomSlide, slideLength])

    return {
        play,
        prev,next,
        toggleRandom,
        loop,
        loopSlide,
        visibleSlide,
        random,
        autoPlay}
}

export default useSliderControl;