import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sortCryptos, sortCryptosSucces } from '../../redux'

import CryptoContainer from './CryptoContainer';

//import images
import triangle from '../../img/triangle.svg'

class CryptoTableContainer extends Component {
  sort(cryptoSortElement) {
    const allTH = document.getElementsByClassName('table__header')
    for(var i = 0; allTH.length > i; i++){
      allTH[i].childNodes[1].classList.remove('up');
      allTH[i].childNodes[1].classList.remove('down');

      if(allTH[i].getAttribute('value') === cryptoSortElement) {
        if (this.props.sortOrder === 'asc') {
          if(allTH[i].getAttribute('value') === 'name') {
            allTH[i].childNodes[1].classList.add('down');
          } else {
            allTH[i].childNodes[1].classList.add('up');
          }
          
        } else {
          if(allTH[i].getAttribute('value') === 'name') {
            allTH[i].childNodes[1].classList.add('up');
          } else {
            allTH[i].childNodes[1].classList.add('down');
          }
          
        }
      }
    }
    this.props.sortCryptos(cryptoSortElement, this.props.cryptoData) //sorts cryptos in state
    this.props.getNewCryptos(this.props.cryptoData.cryptos) //takes sorted state and puts in original state so compnonent refreshes
  }

  render() {
    return (
      <div className="table__container">
        <table className="table">
          <thead className="table__head">
            <tr>
              <th className="table__header market-cap-rank" value="market_cap_rank" onClick={() => this.sort('market_cap_rank')} id="table-center">
                #
                <img className="sorting__icon up" src={triangle} alt="sorting icon"/>
                </th>
              <th id="table-center">Icon</th>
              <th className="table__header name" value="name" onClick={() => this.sort('name')}>
                Name 
                <img className="sorting__icon" src={triangle} alt="sorting icon"/>
                </th>
              <th className="table__header price"  id="table-right" value="current_price" onClick={() => this.sort('current_price')}>
                Price
                <img className="sorting__icon" src={triangle} alt="sorting icon"/>
                </th>
              <th className="table__header change" value="price_change_percentage_24h" onClick={() => this.sort('price_change_percentage_24h')}>
                24h
                <img className="sorting__icon" src={triangle} alt="sorting icon"/>
                </th>
              <th className="table__header change" value="price_change_percentage_7d_in_currency" onClick={() => this.sort('price_change_percentage_7d_in_currency')}>
                7d
                <img className="sorting__icon" src={triangle} alt="sorting icon"/>
                </th>
              <th className="table__header market-cap" value="market_cap" onClick={() => this.sort('market_cap')}>
                Market cap 
                <img className="sorting__icon" src={triangle} alt="sorting icon"/>
                </th>
              <th className="table__header volume" value="total_volume"  onClick={() => this.sort('total_volume')}>
                Volume
                <img className="sorting__icon" src={triangle} alt="sorting icon"/>
                </th>
              <th className="table__header supply" value="circulating_supply" onClick={() => this.sort('circulating_supply')}>
                Circulating supply
                <img className="sorting__icon" src={triangle} alt="sorting icon"/>
                </th>
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
      sortOrder: state.sort.sortOrder
  }
}

const mapDispatchToProps = dispatch => {
  return {
      sortCryptos: (cryptoSortElement, cryptoData) => dispatch(sortCryptos(cryptoSortElement, cryptoData)),
      getNewCryptos: cryptoData => dispatch(sortCryptosSucces(cryptoData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoTableContainer)