import { createAggregate } from 'redux-aggregate'

// ====================================================
//  state

export type State = {
  count: number
  isLoading: boolean
}

const initialState: State = {
  count: 0,
  isLoading: false
}

// ====================================================
//  mutations

export const increment = (state: State) => ({
  ...state,
  isLoading: true
})

export const incrementFinished = (state: State) => ({
  ...state,
  isLoading: false,
  count: state.count + 1
})

export const decrement = (state: State) => ({
  ...state,
  count: state.count - 1
})

export const mutations = {
  increment,
  incrementFinished,
  decrement
}

// ====================================================
//  queries

function getCount(state: State) {
  return `this ${state.count} count`
}

export const queries = { getCount }

// ====================================================
//  reducer

export const sample = createAggregate(mutations, 'sample/')
export const reducer = sample.reducerFactory(initialState)
