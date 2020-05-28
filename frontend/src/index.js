import React from 'react'
import ReactDOM from 'react-dom'

import App from './App/App'
import Contact from './Contact/Contact'

import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
