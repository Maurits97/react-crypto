import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CoinLinksContainer from './CoinLinksContainer'

class CoinInfoContainer extends Component {
    render() {
      const coinData = this.props.coinData.cryptoOne;

      function getChangeColor(change) {
        return change >= 0 ? 'price__change--green' : 'price__change--red'
       }

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

            <CoinLinksContainer coinData={coinData}/>

            <div className="main-side">
              <p className="price__name">{coinData.name} price ({coinData.symbol.toUpperCase()})</p>
              <div className="price">
                <p className="price__amount">{`\u20AC ${coinData.market_data.current_price.eur.toLocaleString()}`}</p>
                <div className={`${getChangeColor(coinData.market_data.price_change_percentage_24h)} price__change`}>
                  <p></p>
                  <p className="price__change__amount">{`${coinData.market_data.price_change_percentage_24h.toFixed(2)} % `}</p>
                </div>
              </div>
              <p className="price__sats">{coinData.market_data.current_price.btc.toFixed(10)} BTC</p>
              <div className="price__high">
                <p className="price--color">High 24h:</p>
                <p>{`\u20AC ${coinData.market_data.high_24h.eur.toLocaleString()}`}</p>
              </div>
              <div className="price__low">
                <p className="price--color">Low 24h:</p>
                <p>{`\u20AC ${coinData.market_data.low_24h.eur.toLocaleString()}`}</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default CoinInfoContainer;