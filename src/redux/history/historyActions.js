import { FETCH_HISTORY_REQUEST, 
  FETCH_HISTORY_SUCCES, 
  FETCH_HISTORY_FAILURE,
  FETCH_HISTORY_MONTHS} from "./historyTypes"
import axios from 'axios'
import store from '../store'


export const fetchHistoryRequest = () => {
  return {
    type: FETCH_HISTORY_REQUEST,
  }
}

export const fetchHistorySucces = history => {
  return {
    type: FETCH_HISTORY_SUCCES,
    payload: history
  }
}

export const fetchHistoryFailure = error => {
  return {
    type: FETCH_HISTORY_FAILURE,
    payload: error
  }
}

export const fetchHistoryMonths = months => {
  return {
    type: FETCH_HISTORY_MONTHS,
    payload: months
  }
}

//fetch All (dynamic) Cryptos
export const fetchHistory = () => {
  const id = store.getState().coinId.coinId
  const months = store.getState().history.historyMonths

  return (dispatch) => {
    dispatch(fetchHistoryRequest)
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${months}
    `)
      .then((response) => {
        const history = response.data
        dispatch(fetchHistorySucces(history))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchHistoryFailure(errorMsg))
      })
  }
}