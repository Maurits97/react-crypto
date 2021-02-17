import { FETCH_CRYPTOS_REQUEST, FETCH_CRYPTOS_SUCCES, FETCH_CRYPTOS_FAILURE } from "./cryptoTypes"
import { SORT_CRYPTOS_SUCCES } from "../sort/sortTypes"

const initialState = {
  loading: true,
  cryptos: [],
  error: '',
}

const cryptoReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CRYPTOS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case FETCH_CRYPTOS_SUCCES:
      return {
        loading: false,
        cryptos: action.payload,
        error: ''
      }
    
    case FETCH_CRYPTOS_FAILURE:
      return {
        loading: false,
        cryptos: [],
        error: action.payload
      }

    case SORT_CRYPTOS_SUCCES: 
      return {
        loading: false,
        cryptos: action.payload,
        error: ''
      }
      
      default: return state
  }
}

export default cryptoReducer