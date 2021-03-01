import React, { Component } from 'react'

class CoinTextContainer extends Component {
    render() {
      const coinData = this.props.coinData.cryptoOne;

        return (
          <div className="coin-text">
            <h2 className="coin-text__header">About {coinData.name}</h2>
            <p className="coin-text__paragraph" dangerouslySetInnerHTML={{ __html: coinData.description.en }}></p>
          </div>
        )
    }
}

export default CoinTextContainer;