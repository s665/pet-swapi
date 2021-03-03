import React from "react";
import useGetSwapiEssenceList from "../hook/useGetSwapiEssenceList";
import Spinner from "../spinner";

const withSwapiData =(mapMethods) => (View) => {
    return (props) => {
        const data = useGetSwapiEssenceList(mapMethods)
        return !!data ? <View {...props} data={data}/> : <Spinner/>
    }
}

export default withSwapiData