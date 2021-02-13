import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCryptos } from '../redux'

function CryptoContainer({ cryptoData, fetchCryptos }) {
  useEffect(() => {
    fetchCryptos()
  }, [fetchCryptos])
    return (
     <div>
       <h2>Crypto List</h2>
       <div>
          {cryptoData && cryptoData.cryptos && cryptoData.cryptos.map(crypto => 
            <div key={crypto.name}>
              <h2 >{crypto.name}</h2>
              <p>&euro; {crypto.current_price}</p>
            </div>)}
       </div>
     </div>
   )
}

const mapStateToProps = state => {
  return {
      cryptoData: state.crypto
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchCryptos: () => dispatch(fetchCryptos())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer)