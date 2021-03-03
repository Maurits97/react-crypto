import React, { Component } from 'react';

class FooterContainer extends Component {
  currentYear = () => {
    return new Date().getFullYear();
  }
  render() {
      return (
        <div className="footer">
            <p className="footer__name">Maurits Bitcoin {this.currentYear()}</p>
            <p className="footer__note">Made by <a href="https://mauritsbrouwer.nl" target="_blank" rel="noreferrer">MauritsBrouwer.nl</a> as a fun side project to learn React.js and Redux. API: <a href="https://www.coingecko.com/en" target="_blank" rel="noreferrer">CoinGecko</a></p>
        </div>
      )
  }
}

export default FooterContainer;