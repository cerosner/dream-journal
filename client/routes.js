import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { AddEntry, AllEntries } from './components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AddEntry} />
        <Route path="/entries" component={AllEntries} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
