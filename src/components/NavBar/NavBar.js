import React from 'react';
import IEEE from '../../assets/IEEE.png';
import SSN from '../../assets/ssn_logo_blue_transparent.png';
import './navbar.css';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from "react-router-dom";
import App from '../../App';
import Home from '../Home';

function NavBar(props) {
    function func() {
        console.log(props.page)
        if (props.page === 1)
            props.handleState(0)
        else
            props.handleState(1)
        console.log(props.page)
    }
    return (
        <div className="navbar">
            <div className="images">
                <img src={IEEE} alt="IEEE" className="brand-img" />
                <img src={SSN} alt="SSN" className="brand-img-ssn" />
            </div>
            <div className='links'>
                <button onClick={func} className="btn1">{props.links}</button>
            </div>
        </div>
    );
}

export default NavBar;


{/* <Router>
<Link to="/events">{props.links}</Link>
<Switch>
    <Route path="/events" component={Home} />
</Switch>
</Router> */}