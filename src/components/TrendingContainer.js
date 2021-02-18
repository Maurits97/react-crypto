import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTrendingCryptos } from '../redux'

// class TrendingContainer extends Component {
//   render() {
//     return (
//       <div className="main">
//         <h1 className="header">Top 7 Trending Crypto Currencies</h1>
//         <p className="header__note">Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first)</p>
//       </div>
//     )
//   }
// }

// export default TrendingContainer;


//using functional component because useEffect() doesnt work in a class component
function TrendingContainer({cryptoDataTrending, fetch7dTrendingCryptos}) {
  function testFunction(){
    console.log(cryptoDataTrending.cryptosTrending.coins[0].item)
  }

  useEffect(() => {
    fetch7dTrendingCryptos()
  }, [fetch7dTrendingCryptos]) 
  return (
    <div className="main">
      <h1 className="header" onClick={() => testFunction()}>Top 7 Trending Crypto Currencies</h1>
      <p className="header__note">Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first)</p>
      <div>
        {cryptoDataTrending.cryptosTrending.coins && cryptoDataTrending.cryptosTrending.coins.map(crypto => <p key={crypto.item.id}>{crypto.item.id}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      cryptoDataTrending: state.crypto,      
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetch7dTrendingCryptos: () => dispatch(fetchTrendingCryptos()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TrendingContainer)