import { FETCH_CRYPTOS_REQUEST, FETCH_CRYPTOS_SUCCES, FETCH_CRYPTOS_FAILURE } from "./cryptoTypes"

const initialState = {
  loading: false,
  data: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CRYPTOS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_CRYPTOS_SUCCES:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    
    case FETCH_CRYPTOS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
      default: return state
  }
}

export default reducer