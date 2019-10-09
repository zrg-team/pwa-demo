import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { withRouter } from 'react-router-dom'
import DemoPage from '../pages/DemoPage'

class Root extends Component {
  componentDidMount () {
    const { history, onRouteChange } = this.props
    history.listen((location, action) => {
      // location is an object like window.location
      onRouteChange(location, action)
    })
  }

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

export default withRouter(Root)
