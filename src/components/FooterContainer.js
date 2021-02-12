import React, { Component } from 'react';

class FooterContainer extends Component {
  currentYear = () => {
    return new Date().getFullYear();
  }
  render() {
      return (
        <div className="footer">
            <p className="footer__name">Maurits Bitcoin {this.currentYear()}</p>
            <p className="footer__note">Made by MauritsBrouwer.nl as a fun side project to learn React.js and Redux</p>
        </div>
      )
  }
}

export default FooterContainer;