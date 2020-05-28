import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App/App'
import Contact from './Contact/Contact'

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/contact" component={Contact} />
    </Switch>
</ BrowserRouter>
)

export default Routes