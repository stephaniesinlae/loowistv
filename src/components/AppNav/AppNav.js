import React from 'react'
//Unicamenta para nuestra Nav 
import { NavLink } from 'react-router-dom';
//Para que la pagina no haga refresh mucho tiempo
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import twitch from '../../img/twitch.png';
import './AppNav.css';

const AppNav = () => {
    return (
        <nav className="navbar navbar-expand-lg fondoN tLetra">
            <NavLink className="navbar-brand img" activeClsssName="disable" to="/">
                <img src={logo} alt="Logo" />
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/add" style={{ color: 'black' }}><h3>Agregar</h3></NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.twitch.tv/loowistv" target="_blank" style={{ color: 'black' }}><img src={twitch} alt="Logo" /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AppNav;