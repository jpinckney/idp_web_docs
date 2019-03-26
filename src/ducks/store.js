import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const composeEnhancers = composeWithDevTools({})

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk))
)

export default store