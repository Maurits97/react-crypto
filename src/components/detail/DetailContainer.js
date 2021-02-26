import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchOneCrypto, fetchCoinId } from '../../redux'
import { useParams } from "react-router";

//component imports
import CoinInfoContainer from './CoinInfoContainer'
import CoinStatsContainer from './CoinStatsContainer'
import CoinTextContainer from './CoinTextContainer.js'

function DetailContainer({cryptoDataOne, fetchOneCrypto, fetchCoinId}) {
  let { id } = useParams();

  useEffect(() => {
    fetchCoinId(id)
    fetchOneCrypto()
  }, [id, fetchOneCrypto, fetchCoinId]) 
    return (
      <div>
        <div className="main">
          <div className="coin">
            <CoinInfoContainer coinData={cryptoDataOne}/>
            <CoinStatsContainer test='coin stats'/>
            <CoinTextContainer test='coin text' />
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