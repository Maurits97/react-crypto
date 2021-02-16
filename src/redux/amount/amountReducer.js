import { FETCH_COIN_AMOUNT} from "./amountTypes"

const initialState = {
  //Set initial coin amount for api call (10/50/100/250)
  amountNumber: 10
}

const amountReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COIN_AMOUNT: return {
      ...state, //asking the reducer to first create copy of the state, and then only update the state that is changed
      amountNumber: action.payload
    }

    default: return state
  }

}

export default amountReducer