import { combineReducers } from 'redux'
import cryptoReducer from './crypto/cryptoReducer'
import amountReducer from './amount/amountReducer'

const rootReducer = combineReducers({
  crypto: cryptoReducer,
  amount: amountReducer
})

export default rootReducer