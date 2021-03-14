import {SwapiContext} from "../../index";
import {useCallback, useContext} from "react";
import useRequest from "./useRequest";

const useItem = (itemId, mapMethods) => {

    const ctx = useContext(SwapiContext)
    
    const request = useCallback(() => {
        const {getData} = mapMethods(ctx)
        return getData(itemId)
    }, [ctx, itemId, mapMethods])
    
    return useRequest(request, !!itemId)
    
}

export default useItem;