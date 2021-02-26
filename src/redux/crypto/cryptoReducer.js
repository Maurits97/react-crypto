import { FETCH_CRYPTOS_REQUEST, 
  FETCH_CRYPTOS_SUCCES, 
  FETCH_CRYPTOS_FAILURE,
  FETCH_TRENDING_CRYPTOS_REQUEST,
  FETCH_TRENDING_CRYPTOS_SUCCES,
  FETCH_TRENDING_CRYPTOS_FAILURE,
  FETCH_ONE_CRYPTO_REQUEST,
  FETCH_ONE_CRYPTO_SUCCES,
  FETCH_ONE_CRYPTO_FAILURE} from "./cryptoTypes"
import { SORT_CRYPTOS_SUCCES } from "../sort/sortTypes"

const initialState = {
  loading: true,
  cryptos: [],
  error: '',
  loadingTrending: true, 
  cryptosTrending: [],
  errorTrending: '',
  loadingOne: true,
  cryptoOne: [],
  errorOne: ''
}

const cryptoReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CRYPTOS_REQUEST:
      return {
        ...state, //makes copy of state and only changes to states below.
        loading: true,
      }

    case FETCH_CRYPTOS_SUCCES:
      return {
        ...state,
        loading: false,
        cryptos: action.payload,
        error: ''
      }
    
    case FETCH_CRYPTOS_FAILURE:
      return {
        ...state,
        loading: false,
        cryptos: [],
        error: action.payload
      }

    case SORT_CRYPTOS_SUCCES: 
      return {
        ...state,
        loading: false,
        cryptos: action.payload,
        error: ''
      }

    case FETCH_TRENDING_CRYPTOS_REQUEST:
      return {
        ...state,
        loadingTrending: true,
      }

    case FETCH_TRENDING_CRYPTOS_SUCCES:
      return {
        ...state,
        loadingTrending: false,
        cryptosTrending: action.payload,
        errorTrending: ''
      }
    
    case FETCH_TRENDING_CRYPTOS_FAILURE:
      return {
        ...state,
        loadingTrending: false,
        cryptosTrending: [],
        errorTrending: action.payload
      }

      case FETCH_ONE_CRYPTO_REQUEST:
        return {
          ...state,
          loadingOne: true,
        }
  
      case FETCH_ONE_CRYPTO_SUCCES:
        return {
          ...state,
          cryptoOne: action.payload,
          loadingOne: false,
          errorOne: ''
        }
      
      case FETCH_ONE_CRYPTO_FAILURE:
        return {
          ...state,
          loadingOne: false,
          cryptoONe: [],
          errorOne: action.payload
        }
      
      default: return state
  }
}

export default cryptoReducer