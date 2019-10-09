import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Notification from '../components/widgets/Notification'
import MainPage from './MainPage'
import * as serviceWorker from '../../serviceWorker'

export default class Root extends Component {
  constructor (props) {
    super(props)
    this.servicePrompt = null
    this.mainPageLoaded = this.mainPageLoaded.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return false
  }

  serviceRegistration () {
    try {
      serviceWorker.register({
        onSuccess: () => {
        },
        onUpdate: () => {
          Notification.show({
            message: 'New version available.',
            level: 'success',
            autoDismiss: 0,
            action: {
              label: 'Refresh',
              callback: function () {
                serviceWorker.unregister((response) => {
                  if (response) {
                    setTimeout(() => {
                      window.location.reload(window.location.href)
                    }, 500)
                    return Notification.show({
                      message: 'Updated.',
                      level: 'success'
                    })
                  } else {
                    Notification.show({
                      message: 'Update fail.',
                      level: 'error'
                    })
                  }
                })
              }
            }
          })
        }
      })
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault()
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        this.servicePrompt = e
        Notification.show({
          message: 'Install the Lotto 6-49 now.',
          level: 'info',
          position: 'bc',
          autoDismiss: 0,
          action: {
            label: 'Install',
            callback: () => {
              // Stash the event so it can be triggered later
              this.servicePrompt.prompt()
              // Wait for the user to respond to the prompt
              this.servicePrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                  console.log('User accepted the A2HS prompt')
                } else {
                  console.log('User dismissed the A2HS prompt')
                }
                this.servicePrompt = null
              })
            }
          }
        })
      })
    } catch (error) {
      console.error('Fatal Error. Cannot Initialize.', error)
    }
  }

  mainPageLoaded (dispatch) {
    this.serviceRegistration()
  }

  render () {
    const { store, persistor, history } = this.props
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainPage
            store={store}
            history={history}
            persistor={persistor}
            mainPageLoaded={this.mainPageLoaded}
          />
        </PersistGate>
      </Provider>
    )
  }
}
