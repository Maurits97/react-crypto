import { FETCH_HISTORY_REQUEST, 
  FETCH_HISTORY_SUCCES, 
  FETCH_HISTORY_FAILURE,
  FETCH_HISTORY_MONTHS} from "./historyTypes"

const initialState = {
  loading: true,
  historyData: [],
  historyMonths: 30, //default = 30 days
  error: ''
}

const historyReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_HISTORY_REQUEST:
      return {
        ...state, //makes copy of state and only changes to states below.
        loading: true,
      }

    case FETCH_HISTORY_SUCCES:
      return {
        ...state,
        loading: false,
        historyData: action.payload,
        error: ''
      }
    
    case FETCH_HISTORY_FAILURE:
      return {
        ...state,
        loading: false,
        historyData: [],
        error: action.payload
      }
       
    case FETCH_HISTORY_MONTHS:
      return {
        ...state,
        historyMonths: action.payload
      }
      
    default: return state
  }
}

export default historyReducer