import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchOneCrypto, fetchCoinId, fetchHistory, fetchHistoryMonths } from '../../redux'
import { useParams } from "react-router";

//component imports
import CoinInfoContainer from './CoinInfoContainer'
import CoinStatsContainer from './CoinStatsContainer'
import CoinTextContainer from './CoinTextContainer'
import CoinChangeContainer from './CoinChangeContainer'
import CoinGraphContainer from './CoinGraphContainer'

function DetailContainer({cryptoDataOne, fetchOneCrypto, fetchCoinId, history, fetchHistory}) {
  let { id } = useParams();

  useEffect(() => {
    fetchCoinId(id)
    fetchOneCrypto()
    fetchHistory()
  }, [id, fetchOneCrypto, fetchCoinId, fetchHistory]) 
    return cryptoDataOne.loadingOne ? (
      <div className="main">
        <p>Crypto Data is loading...</p>
        <p>If the data doesn't load in a few seconds, please reload the page.</p>
      </div>
      ) :(
      <div>
        <div className="main">
          <div className="coin">
            <CoinInfoContainer coinData={cryptoDataOne}/>
            <CoinStatsContainer coinData={cryptoDataOne}/>
            <div className="flex">
              <CoinChangeContainer coinData={cryptoDataOne}/>
              <CoinGraphContainer historyData={history} fetchHistory={fetchHistory} fetchHistoryMonths={fetchHistoryMonths}/>
            </div>

            <CoinTextContainer coinData={cryptoDataOne}/>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = state => {
  return {
      cryptoDataOne: state.crypto,
      history: state.history,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCoinId: (id) => dispatch(fetchCoinId(id)),
    fetchOneCrypto: () => dispatch(fetchOneCrypto()),
    fetchHistory: () => dispatch(fetchHistory()),
    fetchHistoryMonths: (months) => dispatch(fetchHistoryMonths(months))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer)