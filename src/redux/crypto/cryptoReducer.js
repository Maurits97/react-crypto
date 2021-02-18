import { FETCH_CRYPTOS_REQUEST, 
  FETCH_CRYPTOS_SUCCES, 
  FETCH_CRYPTOS_FAILURE,
  FETCH_TRENDING_CRYPTOS_REQUEST,
  FETCH_TRENDING_CRYPTOS_SUCCES,
  FETCH_TRENDING_CRYPTOS_FAILURE} from "./cryptoTypes"
import { SORT_CRYPTOS_SUCCES } from "../sort/sortTypes"

const initialState = {
  loading: true,
  cryptos: [],
  error: '',
  loadingTrending: true, 
  cryptosTrending: [],
  errorTrending: ''
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
      
      default: return state
  }
}

export default cryptoReducer