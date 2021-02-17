import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sortCryptos, sortCryptosSucces } from '../redux'

import CryptoContainer from './CryptoContainer';

class CryptoTableContainer extends Component {
  exampleFunction(){
    console.log('tester Function')
  }
  sort(cryptoSortElement) {
    this.props.sortCryptos(cryptoSortElement, this.props.cryptoData) //sorts cryptos in state
    this.props.getNewCryptos(this.props.cryptoData.cryptos) //takes sorted state and puts in original state so compnonent refreshes
  }

  render() {
    return (
      <div className="table__container">
        <table className="table">
          <thead className="table__header">
            <tr className="">
              <th onClick={() => this.sort('market_cap_rank')} id="table-center">#</th>
              <th id="table-center">Icon</th>
              <th onClick={() => this.sort('name')}>Name</th>
              <th onClick={() => this.sort('current_price')}>Price</th>
              <th onClick={() => this.sort('price_change_percentage_24h')}>24h</th>
              <th onClick={() => this.sort('price_change_percentage_7d_in_currency')}>7d</th>
              <th onClick={() => this.sort('market_cap_rank')}>Market cap</th>
              <th onClick={() => this.sort('total_volume')}>Volume</th>
              <th onClick={() => this.sort('circulating_supply')}>Circulating supply</th>
            </tr>
          </thead>
          {/* ADD TFOOTER */}
            <CryptoContainer />
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      cryptoData: state.crypto,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      sortCryptos: (cryptoSortElement, cryptoData) => dispatch(sortCryptos(cryptoSortElement, cryptoData)),
      getNewCryptos: cryptoData => dispatch(sortCryptosSucces(cryptoData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoTableContainer)