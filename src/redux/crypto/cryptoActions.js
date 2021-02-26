import { FETCH_CRYPTOS_REQUEST, 
  FETCH_CRYPTOS_SUCCES, 
  FETCH_CRYPTOS_FAILURE,
  FETCH_TRENDING_CRYPTOS_REQUEST,
  FETCH_TRENDING_CRYPTOS_SUCCES,
  FETCH_TRENDING_CRYPTOS_FAILURE,
  FETCH_ONE_CRYPTO_REQUEST,
  FETCH_ONE_CRYPTO_SUCCES,
  FETCH_ONE_CRYPTO_FAILURE} from "./cryptoTypes"
import axios from 'axios'
import store from '../store'

export const fetchCryptosRequest = () => {
  return {
    type: FETCH_CRYPTOS_REQUEST,
  }
}

export const fetchCryptosSucces = cryptos => {
  return {
    type: FETCH_CRYPTOS_SUCCES,
    payload: cryptos
  }
}

export const fetchCryptosFailure = error => {
  return {
    type: FETCH_CRYPTOS_FAILURE,
    payload: error
  }
}

//fetch All Cryptos
export const fetchCryptos = () => {
  const amount = store.getState().amount.amountNumber //binding the state to amount

  return (dispatch) => {
    dispatch(fetchCryptosRequest)
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&price_change_percentage=7d&order=market_cap_desc&per_page=${amount}&page=1&sparkline=false`)
      .then((response) => {
        const cryptos = response.data
        dispatch(fetchCryptosSucces(cryptos))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchCryptosFailure(errorMsg))
      })
  }
}

//fetch 7d trending cryptos

export const fetchTrendingCryptosRequest = () => {
  return {
    type: FETCH_TRENDING_CRYPTOS_REQUEST,
  }
}

export const fetchTrendingCryptosSucces = cryptosTrending => {
  return {
    type: FETCH_TRENDING_CRYPTOS_SUCCES,
    payload: cryptosTrending
  }
}

export const fetchTrendingCryptosFailure = errorTrending => {
  return {
    type: FETCH_TRENDING_CRYPTOS_FAILURE,
    payload: errorTrending
  }
}

export const fetchTrendingCryptos = () => {
  return (dispatch) => {
    dispatch(fetchTrendingCryptosRequest)
    axios.get(`https://api.coingecko.com/api/v3/search/trending`)
      .then((response) => {
        const cryptosTrending = response.data
        dispatch(fetchTrendingCryptosSucces(cryptosTrending))
      })
      .catch(error => {
        const errorMsgTrending = error.message
        dispatch(fetchTrendingCryptosFailure(errorMsgTrending))
      })
  }
}

//fetch One crypto

export const fetchOneCryptoRequest = () => {
  return {
    type: FETCH_ONE_CRYPTO_REQUEST,
  }
}

export const fetchOneCryptoSucces = cryptoOne => {
  return {
    type: FETCH_ONE_CRYPTO_SUCCES,
    payload: cryptoOne
  }
}

export const fetchOneCryptoFailure = errorOne => {
  return {
    type: FETCH_ONE_CRYPTO_FAILURE,
    payload: errorOne
  }
}

export const fetchOneCrypto = () => {
  const id = store.getState().coinId.coinId//binding the state to id

  return (dispatch) => {
    dispatch(fetchOneCryptoRequest)
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false
    `)
      .then((response) => {
        const cryptoOne = response.data
        dispatch(fetchOneCryptoSucces(cryptoOne))
      })
      .catch(error => {
        const errorMsgOne = error.message
        dispatch(fetchOneCryptoFailure(errorMsgOne))
      })
  }
}