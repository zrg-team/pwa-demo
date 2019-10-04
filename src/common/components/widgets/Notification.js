import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'

let instanceNotificationComponent
class NotificationComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShow: false,
      component: undefined
    }

    this.notificationSystem = React.createRef()
    this.show = this.show.bind(this)
  }

  show (messages) {
    this.notificationSystem.current.addNotification(messages)
  }

  componentDidMount () {
    const { global } = this.props
    if (global) {
      instanceNotificationComponent = this
    }
  }

  componentWillUnmount () {
    const { global } = this.props
    if (global) {
      instanceNotificationComponent = null
    }
  }

  render () {
    return <NotificationSystem ref={this.notificationSystem} />
  }
}

export default {
  Component: NotificationComponent,
  show (data) {
    console.log('instanceNotificationComponent', instanceNotificationComponent)
    instanceNotificationComponent && instanceNotificationComponent.show(data)
  }
}
