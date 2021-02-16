import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'
// Add logger by putting logger in the applyMiddleWare function i.e. applyMiddleWare(logger, thunk)
// import logger from 'redux-logger'

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

export default store