import { FETCH_COIN_ID } from "./coinIdTypes"

const initialState = {
  //Set initial coin amount for api call (10/50/100/250)
  coinId: ''
}

const coinIdReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COIN_ID: return {
      ...state, //asking the reducer to first create copy of the state, and then only update the state that is changed
      coinId: action.payload
    }

    default: return state
  }

}

export default coinIdReducer