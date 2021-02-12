import { FETCH_CRYPTOS_REQUEST, FETCH_CRYPTOS_SUCCES, FETCH_CRYPTOS_FAILURE } from './cryptoTypes'
import axios from 'axios'

export const fetchCryptosRequest = () => {
  return {
    type: FETCH_CRYPTOS_REQUEST
  }
}

export const fetchCryptosSucces = users => {
  return {
    type: FETCH_CRYPTOS_SUCCES,
    payload: users
  }
}

export const fetchCryptosFailure = error => {
  return {
    type: FETCH_CRYPTOS_FAILURE,
    payload: error
  }
}

let coinAmount = 10;

export const fetchCryptos = () => {
  return (dispatch) => {
    dispatch(fetchCryptosRequest)
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${coinAmount}&page=1&sparkline=false`)
      .then(response => {
        const cryptos = response.data
        dispatch(fetchCryptosSucces(cryptos))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchCryptosFailure(errorMsg))
      })
  }
}