import React, { Component } from 'react';

import CryptoContainer from './CryptoContainer';

class CryptoTableContainer extends Component {
  exampleFunction(){
    console.log('tester bester')
  }

  render() {
    return (
      <div className="table__container">
        <table className="table">
          <thead className="table__header">
            <tr className="table__row--header">
              <th className="th__market-cap" id="table-center">#</th>
              <th id="table-center">Icon</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>7d</th>
              <th>Market cap</th>
              <th>Volume</th>
              <th>Circulating supply</th>
            </tr>
          </thead>
          {/* ADD TFOOTER */}
            <CryptoContainer />
        </table>
        
      </div>
    )
  }
}

export default CryptoTableContainer;

//Table
// Table header
//Table row ==> import rows.