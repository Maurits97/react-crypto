import React, { Component } from 'react'

class CoinChangeContainer extends Component {
    getColor(n) {
      return n >= 0 ? '#16C784' : '#EA3943'
    }

    render() {
        const coinData = this.props.coinData.cryptoOne;

        return (
          <div className="change-stats">
            <div className="change-stats__element">
              <p className="change-stats__header">Market Cap change 24h</p>
              <p className="change-stats__amount" style={{color: this.getColor(coinData.market_data.market_cap_change_percentage_24h)}}>{`${coinData.market_data.market_cap_change_percentage_24h.toFixed(2)}%`}</p>
            </div>
            <div className="change-stats__element">
              <p className="change-stats__header">Price change 24h</p>
              <p className="change-stats__amount" style={{color: this.getColor(coinData.market_data.price_change_percentage_24h)}}>{`${coinData.market_data.price_change_percentage_24h.toFixed(2)}%`}</p>
            </div>
            <div className="change-stats__element">
              <p className="change-stats__header">Price change 7d</p>
              <p className="change-stats__amount" style={{color: this.getColor(coinData.market_data.price_change_percentage_7d)}}>{`${coinData.market_data.price_change_percentage_7d.toFixed(2)}%`}</p>
            </div>
            <div className="change-stats__element">
              <p className="change-stats__header">Price change 14d</p>
              <p className="change-stats__amount" style={{color: this.getColor(coinData.market_data.price_change_percentage_14d)}}>{`${coinData.market_data.price_change_percentage_14d.toFixed(2)}%`}</p>
            </div>
            <div className="change-stats__element">
              <p className="change-stats__header">Price change 200d</p>
              <p className="change-stats__amount" style={{color: this.getColor(coinData.market_data.price_change_percentage_200d)}}>{`${coinData.market_data.price_change_percentage_200d.toFixed(2)}%`}</p>
            </div>
            <div className="change-stats__element">
              <p className="change-stats__header">Price change 1y</p>
              <p className="change-stats__amount" style={{color: this.getColor(coinData.market_data.price_change_percentage_1y)}}>{`${coinData.market_data.price_change_percentage_1y.toFixed(2)}%`}</p>
            </div>
          </div>
        )
    }
}

export default CoinChangeContainer;