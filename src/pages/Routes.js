import React from 'react'
import {Switch, Route, withRouter} from "react-router-dom"

import Home from './Home'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
    </Switch>
  )
}

export default withRouter(Routes)