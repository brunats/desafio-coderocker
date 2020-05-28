import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from '../App/App'
import Contact from '../Pages/Contact'

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
</ BrowserRouter>
)

export default Routes