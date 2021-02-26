import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CoinInfoContainer extends Component {
    
    render() {
      const coinData = this.props.coinData.cryptoOne;

      return this.props.coinData.loadingOne ? (
        <div>
          <p>Crypto Data is loading...</p>
          <p>If the data doesn't load in a few seconds, please reload the page.</p>
        </div>
        ) : (
        <div className="coin-info">
          <div className="breadcrumbs">
            <Link to="/" className="breadcrumbs__base"><p>Crypto currencies</p></Link>
            <p className="breadcrumbs__spacer">	&#62;</p>
            <p className="breadcrumbs__coin">{coinData.symbol}</p>
          </div>
          <div className="main-info">
            <div className="main-head">
              <img className="coin__image" src={coinData.image.large} alt="coin"/>
              <h1 className="coin__name">{coinData.name}</h1>
              <h1 className="coin__name--background">{coinData.name}</h1>
              <p className="coin__symbol">{coinData.symbol}</p>
            </div>
            <p className="coin__rank">Rank: #{coinData.market_cap_rank}</p>
            <div className="main-side">

            </div>
          </div>
        </div>
      )
    }
}

export default CoinInfoContainer;