import { combineReducers } from 'redux'
import cryptoReducer from './crypto/cryptoReducer'
import amountReducer from './amount/amountReducer'
import sortReducer from './sort/sortReducer'

const rootReducer = combineReducers({
  crypto: cryptoReducer,
  amount: amountReducer,
  sort: sortReducer
})

export default rootReducer