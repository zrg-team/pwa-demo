import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Routes from '../routes'
import Modal from '../components/widgets/Modal'
import Notification from '../components/widgets/Notification'
import PageLoading from '../components/widgets/PageLoading'
import ProgressLoading from '../components/widgets/ProgressLoading'
import Loading from '../components/widgets/Loading'
import { setHeaderData } from '../actions/session'
import { parseQueryString } from '../utils/navigation'

class MainPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
    this.notificationSystem = React.createRef()
    this.handleRouteChange = this.handleRouteChange.bind(this)
  }

  handleRouteChange (location, action) {
    try {
      const { dispatch } = this.props
      const hash = decodeURIComponent(location.hash)
      const data = parseQueryString(hash)
      if (Object.keys(data).length && data.message) {
        dispatch(setHeaderData(data))
        // window.location.hash = location.pathname
        Notification.show({
          message: data.message,
          level: 'success',
          autoDismiss: 10
        })
      }
    } catch (err) {
    }
  }

  componentDidMount () {
    const { dispatch, mainPageLoaded } = this.props
    mainPageLoaded(dispatch)
    window.addEventListener('hashchange', () => {
      this.handleRouteChange(window.location)
    })
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
          <Routes onRouteChange={this.handleRouteChange} store={store} />
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
