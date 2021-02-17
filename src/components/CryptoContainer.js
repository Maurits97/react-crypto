import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCryptos } from '../redux'

//using functional component because useEffect() doesnt work in a class componen
function CryptoContainer({cryptoData, fetchCryptos, amountData}) {
  let coinAmount = amountData.amountNumber

  function getColor(n) {
    return n >= 0 ? '#16C784' : '#EA3943'
  }

  function checkIfNumber(n, output) {
    if (n === null || n === undefined) {
      return <i>No record found</i>; //if input is null or undefined, show No Record Found
    } else {
      if (output === 'percentage') {
        return n.toFixed(2) + '%'; //if ouput equals 'percentage', short number decimals to 2.
      } else if (output === 'market-cap' || output === 'volume') {
        return `\u20AC ${n.toLocaleString()} ` //if output equals 'market-cap' OR 'volume', add comma's and dots and add euro sign.
      }
    }
  }
  useEffect(() => {
    fetchCryptos()
  }, [coinAmount, fetchCryptos,]) //if coinAmount changes (in FilterContainer.js) fetchCryptos() is called again, thanks to useEffect()
    return cryptoData.loading ? (
    <tbody>
      <tr><td colSpan="9">Crypto's are loading...
      </td></tr>
      <tr><td colSpan="9">If they don't load in a few seconds, please reload the page.
      </td></tr>
    </tbody>) : (
     <tbody>
        {cryptoData.cryptos && cryptoData.cryptos.map(crypto => 
            <tr key={crypto.id} className="table-row">
              <td className="coin__market-cap-nr">{crypto.market_cap_rank}</td>
              <td className="coin__image"><img className="coin__image-src" src={crypto.image} alt="coin" /></td>
              <td className="coin__name">{crypto.name}</td>
              <td className="coin__price">{`\u20AC ${crypto.current_price.toLocaleString()}`}</td>
              <td className="coin__change" style={{color: getColor(crypto.price_change_percentage_24h)}}>{checkIfNumber(crypto.price_change_percentage_24h, 'percentage')}</td>
              <td className="coin__change" style={{color: getColor(crypto.price_change_percentage_7d_in_currency)}}>{checkIfNumber(crypto.price_change_percentage_7d_in_currency, 'percentage')}</td>
              <td className="coin__market-cap">{checkIfNumber(crypto.market_cap, 'market-cap')}</td>
              <td className="coin__volume">{checkIfNumber(crypto.total_volume, 'volume')}</td>
              <td className="coin__supply">{`${crypto.circulating_supply.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})} ${crypto.symbol.toUpperCase()}`}</td>
            </tr>)}
     </tbody>
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