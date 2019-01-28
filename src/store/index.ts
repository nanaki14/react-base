import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import * as sample from '~/store/modules/sample'
import rootSaga from '~/store/sagas'

export type RootState = {
  sample: sample.State
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const win = window as any

  /* redux-dev-tools */
  const dev =
    process.env.NODE_ENV !== 'production' ||
    (typeof window === 'object' && window.location.search === '?dev')

  const composeEnhancers =
    typeof win === 'object' && win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose

  // with middleware
  const enhancer = dev
    ? composeEnhancers(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)

  const reducers = combineReducers({
    sample: sample.reducer
  } as any)

  const store = createStore(reducers, enhancer)

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
