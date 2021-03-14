import React from "react";

const withSwapiService = (mapMethodsToProps) => (Wrap) => {
    return (props) => {
        return <Wrap {...props} mapMethods={mapMethodsToProps}/>
    }
}

export default withSwapiService;