import { takeEvery, put, call } from 'redux-saga/effects'
import { sample as sampleActions } from '~/store/modules/sample'

const get = (object) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(object), 1000)
  })

function* handleIncrement() {
  const { data, err } = yield call(get, {})
  console.log(data, err)
  yield put(sampleActions.creators.incrementFinished())
}

export default [takeEvery(sampleActions.types.increment, handleIncrement)]
