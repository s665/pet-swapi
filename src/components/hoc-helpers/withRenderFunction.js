import React from "react";

const withRenderFunction = (renderFunction) => (Wrapped) => {
    return (props) => {
        return <Wrapped {...props} renderFunction={renderFunction}/>
        }
}

export default withRenderFunction