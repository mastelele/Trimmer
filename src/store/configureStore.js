import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
    initialState,
  )

  // HotReload - resets state
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }
  return store
}
