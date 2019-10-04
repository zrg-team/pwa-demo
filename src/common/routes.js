import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import DemoPage from '../pages/DemoPage'

export default class Root extends Component {
  render () {
    // const { store } = this.props
    return (
      <>
        <Switch>
          <Route key='' path='/' exact component={DemoPage} />,
          <Route component={DemoPage} />
        </Switch>
      </>
    )
  }
}
