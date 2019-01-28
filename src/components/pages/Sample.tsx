import React from 'react'

import logo from '~/logo.svg'

import { State } from '~/store/modules/sample'

type Props = {
  sample: State
  incrment: () => void
  decrement: () => void
  children: any
}

export default function Sample({
  sample,
  incrment,
  decrement,
  children
}: Props) {
  console.log(sample)
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      {children}

      <button>{sample.count}</button>
      <button
        onClick={() => {
          incrment()
        }}
      >
        incrment
      </button>
      <button
        onClick={() => {
          decrement()
        }}
      >
        decrement
      </button>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )
}
