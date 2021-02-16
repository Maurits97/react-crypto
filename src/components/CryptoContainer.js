import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCryptos } from '../redux'

//using functional component because useEffect() doesnt work in a class componen
function CryptoContainer({cryptoData, fetchCryptos, amountData}) {
  let coinAmount = amountData.amountNumber

  useEffect(() => {
    fetchCryptos()
  }, [coinAmount, fetchCryptos]) //if coinAmount changes (in FilteContainer.js) fetchCryptos() is called again, thanks to useEffect()
    return (
     <div>
       <div>
          {cryptoData.cryptos && cryptoData.cryptos.map(crypto => 
            <div key={crypto.id}>
              <h2 >{crypto.name}</h2>
              <p>&euro; {crypto.current_price}</p>
            </div>)}
       </div>
     </div>
   )
}

const mapStateToProps = state => {
  return {
      cryptoData: state.crypto,
      amountData: state.amount
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchCryptos: () => dispatch(fetchCryptos()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer)