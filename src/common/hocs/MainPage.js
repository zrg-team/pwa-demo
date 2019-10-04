import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Routes from '../routes'
import Modal from '../components/widgets/Modal'
import Notification from '../components/widgets/Notification'
import PageLoading from '../components/widgets/PageLoading'
import ProgressLoading from '../components/widgets/ProgressLoading'
import Loading from '../components/widgets/Loading'

class MainPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
    this.notificationSystem = React.createRef()
  }

  componentDidMount () {
    const { mainPageLoaded } = this.props
    mainPageLoaded()
  }

  shouldComponentUpdate (nextProps) {
    return false
  }

  render () {
    const { loading } = this.state
    const { store } = this.props
    if (loading) {
      return <Loading />
    }
    return (
      <>
        <HashRouter>
          <Routes store={store} />
        </HashRouter>
        <ProgressLoading.Component />
        <PageLoading.Component type='bars' />
        <Modal.Component global />
        <Notification.Component global />
      </>
    )
  }
}

export default connect(
  (state) => {
    return {}
  }, (dispatch) => ({
    dispatch
  })
)(MainPage)
