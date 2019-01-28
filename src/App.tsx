import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import configureStore from '~/store'
import ThemeWrapper from '~/theme'

import SampeContainer from '~/containers/pages/SampleContainer'
import Text from '~/Text'

const store = configureStore()

function Home() {
  return (
    <div>
      <Text text="home" />
      <Link to="/">home</Link>
      <br />
      <Link to="/under">under</Link>
    </div>
  )
}
function Under() {
  return (
    <div>
      <Text text="under" />
      <Link to="/">home</Link>
      <br />
      <Link to="/under">under</Link>
    </div>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <SampeContainer>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/under" component={Under} />
            </div>
          </BrowserRouter>
        </SampeContainer>
      </ThemeWrapper>
    </Provider>
  )
}
