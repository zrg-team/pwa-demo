import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { createHashHistory } from 'history'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware, compose } from 'redux'
import createSaga from './middlewares'
import commonReducers, { defaultState as defaultCommonState } from './reducers/common'
import sessionReducers from './reducers/session'
import { getCookie } from './utils/cookies'

export const history = createHashHistory()

const config = {
  key: 'root',
  storage,
  blacklist: ['session']
}
const createMiddlewares = sagaMiddleware => {
  const middlewares = []

  // Saga Middleware
  if (sagaMiddleware) {
    middlewares.push(sagaMiddleware)
  }

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  })
  process.env.NODE_ENV !== 'production' && middlewares.push(logger)

  return applyMiddleware.apply({}, middlewares)
}

const createReducers = reducers => {
  return persistCombineReducers(config, {
    common: commonReducers,
    session: sessionReducers,
    ...reducers
  })
}
function mapCookieToStorage () {
  let initialState
  try {
    initialState = {}
    const storage = JSON.parse(window.localStorage.getItem('persist:root'))
    const commonStorage = storage && storage.common
      ? JSON.parse(storage.common)
      : defaultCommonState
    commonStorage.token = getCookie('token')
    storage.common = JSON.stringify(commonStorage)
    window.localStorage.setItem('persist:root', JSON.stringify(storage))
  } catch (err) {
    initialState = undefined
  }
  return {
    ...initialState || {}
  }
}
const composeEnhancers = process.env.NODE_ENV !== 'production'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose
const buildStore = (reducers) => {
  const initialState = mapCookieToStorage()
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(createReducers(reducers), initialState, composeEnhancers(createMiddlewares(sagaMiddleware)))

  const persistor = persistStore(store)
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(createReducers(reducers))
    })
  }

  store.reducers = createReducers(reducers)
  sagaMiddleware.run(createSaga(store.getState))
  return { persistor, store }
}

export default buildStore()
