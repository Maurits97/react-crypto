import React, { Component } from 'react';

//component imports
import FilterContainer from './FilterContainer'
import CryptoContainer from './CryptoContainer';

class MarketCapContainer extends Component {
    render() {
        return (
          <div>
            <FilterContainer />
            <div className="main">
                <CryptoContainer />
            </div>
          </div>
           
            
        )
    }
}

export default MarketCapContainer;