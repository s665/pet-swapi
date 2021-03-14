import {useEffect, useState} from "react";

const useRequest = (request, isSendRequest) => {

    const [dataState, setDataState] = useState({
        loading: true,
        error: false,
        data: null
    })

    useEffect(() => {
        let canceled = false
        if (!!isSendRequest) {
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
        } else {
            setDataState({
                loading: false,
                data: null,
                error: false
            })
        }
        return () => canceled = true
    }, [isSendRequest, request])

    return dataState


}

export default useRequest;