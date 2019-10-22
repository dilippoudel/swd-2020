import React from 'react';
import {Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
const Header = () => {
    return(
        <div className = "ui secondary pointing menu">
            <Link to = "/" className="item">
                <Home/>
            </Link>
            <div className="reght menu">
                <Link to="/about" className = "item">
                    <About/>
                </Link>
            </div>
        </div>
    )
}
export default Header;