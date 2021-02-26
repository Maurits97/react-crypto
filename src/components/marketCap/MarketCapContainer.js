import React, { Component } from 'react';

//component imports
import FilterContainer from './FilterContainer'
import CryptoTableContainer from './CryptoTableContainer';

class MarketCapContainer extends Component {
    render() {
        
        return (
          <div>
            <FilterContainer />
            <div className="main">
                <CryptoTableContainer />
            </div>
          </div>
        )
    }
}

export default MarketCapContainer;