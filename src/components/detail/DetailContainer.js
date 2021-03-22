import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchOneCrypto, fetchCoinId } from '../../redux'
import { useParams } from "react-router";

//component imports
import CoinInfoContainer from './CoinInfoContainer'
import CoinStatsContainer from './CoinStatsContainer'
import CoinTextContainer from './CoinTextContainer'
import CoinChangeContainer from './CoinChangeContainer'
import CoinGraphContainer from './CoinGraphContainer'
import CoinGraphContainerTest from './CoinGraphContainerTest'

function DetailContainer({cryptoDataOne, fetchOneCrypto, fetchCoinId}) {
  let { id } = useParams();

  useEffect(() => {
    fetchCoinId(id)
    fetchOneCrypto()
  }, [id, fetchOneCrypto, fetchCoinId]) 
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
              <CoinTextContainer coinData={cryptoDataOne}/>
            </div>
            {/* <CoinGraphContainer /> */}
            <CoinGraphContainerTest />
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = state => {
  return {
      cryptoDataOne: state.crypto,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCoinId: (id) => dispatch(fetchCoinId(id)),
    fetchOneCrypto: () => dispatch(fetchOneCrypto()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer)