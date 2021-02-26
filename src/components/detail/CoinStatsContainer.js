import React, { Component } from 'react'

class CoinStatsContainer extends Component {
    render() {
        return (
          <div className="coin-stats">
              <h1>{this.props.test}</h1>
          </div>
        )
    }
}

export default CoinStatsContainer;