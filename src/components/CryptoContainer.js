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
          {cryptoData && cryptoData.users && cryptoData.users.map(user => 
            <div key={user.name}>
              <h2 >{user.name}</h2>
              <p>&euro; {user.current_price}</p>
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