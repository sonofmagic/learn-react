// eslint-disable-next-line no-use-before-define
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
// import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom'
import Signin from './components/Signin/index'
import Term from './components/Term/index'
import Home from './components/Home/index'
import store from './store'
import { Provider } from 'react-redux'
// import { createBrowserHistory } from 'history'
// const customHistory = createBrowserHistory()
import './init.ts'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <div>
          <Switch>
            <div className="container mx-auto">
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/term">
                <Term />
              </Route>
            </div>

            <Route path="/signin">
              <Signin />
            </Route>

          </Switch>
        </div>
      </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
