import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Header from "./header";
import NavBar from "./nav-bar";

const NavGroup = () => {
    const history = useHistory();

    history.listen(() => {
        setShowNavBar(false)
    })

    const [showNavBar, setShowNavBar] = useState(false)

    const toggleNavBar = () => {
        setShowNavBar((state) => !state)
    }
    return (
        <React.Fragment>
            <Header toggleNavBar={() => toggleNavBar(true)}/>
            <NavBar toggleNavBar={() => toggleNavBar(false)}
                    showNavBar={showNavBar}/>

        </React.Fragment>
    );
}

export default NavGroup;