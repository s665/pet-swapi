import {useContext, useEffect} from "react";
import {SwapiContext} from "../../index";
import {fetchData} from "../../actions";
import {useDispatch, useSelector} from "react-redux";

const useGetSwapiEssenceList = (mapMethods) => {

    const ctx = useContext(SwapiContext)
    const dispatch = useDispatch()
    const {getData, essence} = mapMethods(ctx)
    const listData = useSelector(store => store.swapi[essence])

    useEffect(() => {
        if(!!!listData) {
            dispatch(fetchData(essence, getData))
        }
    }, [dispatch, essence, getData, listData])

    return listData

}

export default useGetSwapiEssenceList;