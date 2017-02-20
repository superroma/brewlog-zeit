import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

let store = null

export const initStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, initialState, applyMiddleware(reduxThunk))
  } else {
    if (!store) {
      const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(reduxThunk)))
    }
    return store
  }
}