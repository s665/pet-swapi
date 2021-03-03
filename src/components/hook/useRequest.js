import {useEffect, useState} from "react";

const useRequest = (request) => {

    const [dataState, setDataState] = useState({
        loading: true,
        error: false,
        data: null
    })

    useEffect(() => {
        let canceled = false
        request()
            .then(data => !canceled && setDataState({
                loading: false,
                error: false,
                data
            }))
            .catch(error => !canceled && setDataState({
                loading: false,
                error,
                data: null
            }))
        return () => canceled = true
    }, [request])

    return dataState

}

export default useRequest;