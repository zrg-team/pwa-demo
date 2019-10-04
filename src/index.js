import React from 'react'
import ReactDOM from 'react-dom'
import Root from './common/hocs/Root'
import './assets/styles/app.css'
import './assets/styles/transition.css'
import store, { history } from './common/store'

ReactDOM.render(<Root {...store} history={history} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
