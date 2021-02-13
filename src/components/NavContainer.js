import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

//import images
import Logo from '../img/Logo_MauritsBitcoin.png'
import Hamburger from '../img/hamburger_icon.svg'
import Plus from '../img/plus_icon.svg'

class NavContainer extends Component {
  constructor() {
    super();
    this.state = {
      navMobileOpen: '',
      hamburgerActive: 'hamburger-active',
      crossActive: '',
    };
  }
  mobileMenuClicked = () => {
    if (this.state.navMobileOpen === '') {
      this.setState({
        navMobileOpen: 'nav--mobile-open',
        hamburgerActive: '',
        crossActive: 'cross-active'
      });
    } else {
      this.setState({
        navMobileOpen: '',
        hamburgerActive: 'hamburger-active',
        crossActive: ''
      });
    }
    
  }
  render() {
    return (
      <div className="nav">
        <NavLink to="/"><img className="nav__logo" src={Logo} alt="logo"/></NavLink>
        
        <ul className="nav__list">
          <li className="nav__list__item"><NavLink to="/" className="nav-standard" activeClassName="nav-active" exact={true}>Market Cap</NavLink></li>
          <li className="nav__list__item"><NavLink to="/trending" className="nav-standard" activeClassName="nav-active">Trending</NavLink></li>
        </ul>

        <div className="nav--mobile__button" onClick={this.mobileMenuClicked}>
          <img className={`nav__hamburger ${this.state.hamburgerActive}`} src={Hamburger} alt="hamburger menu"/>
          <img className={`nav__cross ${this.state.crossActive}`} src={Plus} alt="hamburger menu"/>
        </div>

        <div className={`nav--mobile ${this.state.navMobileOpen}`}>
          <ul className="nav--mobile__list">
            <li className="nav--mobile__list__item"><NavLink to="/" className="nav--mobile-standard" activeClassName="nav--mobile-active" exact={true} onClick={this.mobileMenuClicked}>Market Cap</NavLink></li>
            <li className="nav--mobile__list__item"><NavLink to="/trending" className="nav--mobile-standard" activeClassName="nav--mobile-active" onClick={this.mobileMenuClicked}>Trending</NavLink></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavContainer;