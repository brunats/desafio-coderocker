import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Posts from '../Pages/Posts'

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
    </Switch>
</ BrowserRouter>
)

export default Routes