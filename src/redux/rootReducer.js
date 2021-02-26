import { combineReducers } from 'redux'
import cryptoReducer from './crypto/cryptoReducer'
import amountReducer from './amount/amountReducer'
import sortReducer from './sort/sortReducer'
import coinIdReducer from './coinId/coinIdReducer'

const rootReducer = combineReducers({
  crypto: cryptoReducer,
  amount: amountReducer,
  sort: sortReducer,
  coinId: coinIdReducer,
})

export default rootReducer