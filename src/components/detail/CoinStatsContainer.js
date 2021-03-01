import React, { Component } from 'react'

class CoinStatsContainer extends Component {
    checkNumber(n) {
      return n === null ? 'No record found' : `${n.toLocaleString()} ${this.coinData.symbol.toUpperCase()}`
    }

    getColor(n) {
      return n >= 0 ? '#16C784' : '#EA3943'
    }

    render() {
        const coinData = this.props.coinData.cryptoOne;

        return (
          <div className="coin-stats">
              <div className="coin-stats__element">
                <p className="coin-stats__header">Market Cap</p>
                <p className="coin-stats__amount">{`\u20AC ${coinData.market_data.market_cap.eur.toLocaleString()}`}</p>
              </div>
              <div className="coin-stats__element">
                <p className="coin-stats__header">Volume</p>
                <p className="coin-stats__amount">{`\u20AC ${coinData.market_data.total_volume.eur.toLocaleString()}`}</p>
              </div>
              <div className="coin-stats__element">
                <p className="coin-stats__header">Circulating Supply</p>
                <p className="coin-stats__amount">{`${coinData.market_data.circulating_supply.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})} ${coinData.symbol.toUpperCase()}`}</p>
              </div>
              <div className="coin-stats__element">
                <p className="coin-stats__header">Max Supply</p>
                <p className="coin-stats__amount">{`${this.checkNumber(coinData.market_data.total_supply)}`}</p>
              </div>
          </div>
        )
    }
}

export default CoinStatsContainer;