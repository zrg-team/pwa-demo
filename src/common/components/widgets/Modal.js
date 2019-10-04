import { Component } from 'react'
// import Card from '@material-ui/core/Card'

let instanceModalComponent
class ModalComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShow: false,
      component: undefined
    }

    this.activateModal = this.activateModal.bind(this)
    this.deactivateModal = this.deactivateModal.bind(this)
    this.getApplicationNode = this.getApplicationNode.bind(this)
  }

  activateModal (component) {
    this.setState({
      isShow: true,
      component
    })
  }

  deactivateModal () {
    const { deactiveCallback } = this.state
    deactiveCallback && deactiveCallback()
    this.setState({
      isShow: false,
      title: '',
      component: undefined
    })
  }

  getApplicationNode () {
    return document.getElementById('application')
  }

  componentDidMount () {
    const { global } = this.props
    if (global) {
      instanceModalComponent = this
    }
  }

  componentWillUnmount () {
    const { global } = this.props
    if (global) {
      instanceModalComponent = null
    }
  }

  render () {
    // const { classes } = this.props
    const { isShow, component } = this.state
    if (!isShow || !component) {
      return null
    }
    return (
      component
    )
  }
}

export default {
  Component: ModalComponent,
  show (component) {
    instanceModalComponent && instanceModalComponent.activateModal(component)
  },
  hide () {
    instanceModalComponent && instanceModalComponent.deactivateModal()
  },
  getApplicationNode () {
    return (instanceModalComponent && instanceModalComponent.getApplicationNode()) || undefined
  }
}
