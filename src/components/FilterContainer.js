import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCoinAmount } from '../redux'

//import images
import searchIcon from '../img/search_icon.svg'

class FilterContainer extends Component {
  changeCoinAmount(){
    var coinFilter = document.getElementById("coin-filter")
    var selectedValue = coinFilter.options[coinFilter.selectedIndex].value
    this.props.fetchCoinAmount(selectedValue)
  }

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

        <select className="change-amount" name="coinAmount" defaultValue={this.props.amountData.amountNumber} id="coin-filter" onChange={() => this.changeCoinAmount()}>
          <option value="10">10 coins</option>
          <option value="50">50 coins</option>
          <option value="100">100 coins</option>
          <option value="250">250 coins</option>
        </select>
        <p className="change-amount__note">Changing crypto amount can take up to a few seconds</p>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      amountData: state.amount
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchCoinAmount: number => dispatch(fetchCoinAmount(number)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);