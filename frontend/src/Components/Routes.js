import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Contact from '../Pages/Contact'

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
</ BrowserRouter>
)

export default Routes