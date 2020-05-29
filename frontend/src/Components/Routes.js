import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Post from '../Pages/Post'

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post" component={Post} />
    </Switch>
</ BrowserRouter>
)

export default Routes