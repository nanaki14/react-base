import { applyMiddleware, createStore, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import * as sample from '~/store/modules/sample'
import rootSaga from '~/store/sagas'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => any
  }
}

export type RootState = {
  sample: sample.State
}

const configureStore = () => {
  // const createStoreWithMiddleware = compose(
  //   applyMiddleware(),
  // )(createStore)
  const sagaMiddleware = createSagaMiddleware()

  const reducers = combineReducers({
    sample: sample.reducer
  } as any)

  const store = createStore(reducers, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore

/*
process.env.NODE_ENV === 'development' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
 */
