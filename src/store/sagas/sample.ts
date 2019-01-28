import { takeEvery, put, call } from 'redux-saga/effects'
import { sample as sampleActions } from '~/store/modules/sample'

function* handleIncrement() {
  const timeout = (object: object) =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          payload: object
        })
      }, 5000)
    )
  const { payload, err } = yield call(timeout, {})
  console.log(payload)
  console.log(err)
  yield put(sampleActions.creators.incrementFinished())
}

export default [takeEvery([sampleActions.creators.increment], handleIncrement)]
