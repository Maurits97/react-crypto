import React, { Component } from 'react'

class CoinInfoContainer extends Component {
    render() {
        return this.props.coinData.loadingOne ? (
          <div>
            <p>Crypto Data is loading...</p>
            <p>If the data doesn't load in a few seconds, please reload the page.</p>
          </div>
          ) : (
          <div className="coin-info">
            <div className="breadcrumbs">
              <h1>{this.props.coinData.cryptoOne.name}</h1>
            </div>
          </div>
        )
    }
}

export default CoinInfoContainer;