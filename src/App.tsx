import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {createGlobalStyle, ThemeProvider, Theme} from '~/styles';

import Text from '~/text';

import logo from '~/logo.svg';
import '~/App.css';

const ClobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`

const Home = () => (
  <div>
    <Text text="home"/>
    <Link to="/">home</Link><br/>
    <Link to="/under">under</Link>
  </div>
);
const Under = () => (
  <div>
    <Text text="under"/>
    <Link to="/">home</Link><br/>
    <Link to="/under">under</Link>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClobalStyle/>
        <ThemeProvider theme={Theme}>
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/under" component={Under}/>
            </div>
          </BrowserRouter>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
