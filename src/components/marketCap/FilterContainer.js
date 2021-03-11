import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchCoinAmount, fetchAllCryptos } from '../../redux'

import AutoCompleteText from './AutoCompleteText'

//using functional component because useEffect() doesnt work in a class component
function FilterContainer({fetchCoinAmount, fetchAllCryptos, amountData, allCryptos}) {
  function changeCoinAmount(){
    var coinFilter = document.getElementById("coin-filter")
    var selectedValue = coinFilter.options[coinFilter.selectedIndex].value
    fetchCoinAmount(selectedValue)
  }

  useEffect(() => {
    fetchAllCryptos()
  }, [fetchAllCryptos]) 

  return (
  <div className="filter">
    <div className="filter__wrapper">
      

      <AutoCompleteText items={allCryptos}/>

      <select className="change-amount" name="coinAmount" defaultValue={amountData.amountNumber} id="coin-filter" onChange={() => changeCoinAmount()}>
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

const mapStateToProps = state => {
  return {
      amountData: state.amount,
      allCryptos: state.crypto.cryptosAll
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchCoinAmount: number => dispatch(fetchCoinAmount(number)),
      fetchAllCryptos: () => dispatch(fetchAllCryptos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);