import React, { Component } from 'react'

class CoinTextContainer extends Component {
    render() {
        return (
          <div className="coin-text">
            <h1>{this.props.test}</h1>
          </div>
        )
    }
}

export default CoinTextContainer;