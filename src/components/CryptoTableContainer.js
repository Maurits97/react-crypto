import React, { Component } from 'react';

import CryptoContainer from './CryptoContainer';

class CryptoTableContainer extends Component {
  exampleFunction(){
    console.log('tester bester')
  }

  render() {
    return (
      <div className="table">
        <CryptoContainer />
      </div>
    )
  }
}

export default CryptoTableContainer;