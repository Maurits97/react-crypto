import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTrendingCryptos } from '../redux'
import { useHistory } from "react-router-dom";

//using functional component because useEffect() doesnt work in a class component
function TrendingContainer({cryptoDataTrending, fetch7dTrendingCryptos}) {
  function testFunction(){
    console.log(cryptoDataTrending.cryptosTrending.coins[0].item)
  }

  const history = useHistory(); 
  const handleRowClick = (id) => { //used for table row link to coin detail page
    history.push(`/coin/${id}`);
  }  

  useEffect(() => {
    fetch7dTrendingCryptos()
  }, [fetch7dTrendingCryptos]) 
  return (
    <div className="main">
      <h1 className="header" onClick={() => testFunction()}>Top 7 Trending Crypto Currencies</h1>
      <p className="header__note">Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first)</p>
      <div className="trending">
        {cryptoDataTrending.cryptosTrending.coins && cryptoDataTrending.cryptosTrending.coins.map(crypto => 
        <div onClick={()=> handleRowClick(crypto.item.id)} className="trending__item" key={crypto.item.id}>
          <img className="trending__item__image" src={crypto.item.large} alt="crypto icon"/>
          <p className="trending__item__name" >{crypto.item.name}</p>
          {/* <p className="trending__item__image--bg" >{crypto.item.name}</p> */}
          <p className="trending__item__symbol">{crypto.item.symbol}</p>
          <p className="trending__item__rank">Rank: #{crypto.item.market_cap_rank}</p>
          <p className="trending__item__score">Trending: {crypto.item.score + 1}</p>
          </div>)}
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