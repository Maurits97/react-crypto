import React, { Component } from 'react';

//import images
import searchIcon from '../img/search_icon.svg'

class FilterContainer extends Component {
  render() {
      return (
        <div className="filter">
          <div className="filter__wrapper">
            <div className="search">
              <input className="search__input" placeholder="Search Crypto Currencies..."></input>
              <button className="search__button">
                <img className="search__icon" src={searchIcon} alt="search icon"/>
              </button>
            </div>
          </div>
        </div>
      )
  }
}

export default FilterContainer;