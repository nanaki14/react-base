import { all } from 'redux-saga/effects'
import sampleSaga from '~/store/sagas/sample'

export default function* rootSaga() {
  yield all([...sampleSaga])
}
