import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

//import images
import Logo from '../img/Logo_MauritsBitcoin.png'

class NavContainer extends Component {
    render() {
        return (
            <div className="nav">
                <NavLink to="/"><img className="nav__logo" src={Logo} alt="logo"/></NavLink>
                <ul className="nav__list">
                    <li className="nav__list__item"><NavLink to="/" className="nav-standard" activeClassName="nav-active" exact={true}>Market Cap</NavLink></li>
                    <li className="nav__list__item"><NavLink to="/trending" className="nav-standard" activeClassName="nav-active">Trending</NavLink></li>
                </ul>
            </div>
            
        )
    }
}

export default NavContainer;