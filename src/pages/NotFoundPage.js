import React from 'react'
import '../assets/styles/no-page.css'

export default class NotFoundPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }

    this.timeout = setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
  }

  componentWillUnmount () {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }

  render () {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundImage: 'linear-gradient( 359.3deg,  rgba(196,214,252,1) 1%, rgba(187,187,187,0) 70.9% )'
        }}
      >
        <div id='oopss'>
          <div id='error-text'>
            <span>404</span>
            <p style={{ color: '#5b5a5a' }}>PAGE NOT FOUND</p>
            <p className='hmpg'><a href='/' className='back'>Back To Home</a></p>
          </div>
        </div>
      </div>
    )
  }
}
