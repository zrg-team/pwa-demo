import { handleActions } from 'redux-actions'
import * as actions from './actions'
import { clearAll } from '../../common/actions/common'

const defaultState = {
  data: []
}

const handlers = {
  [clearAll]: (state, action) => ({ ...defaultState }),
  [actions.setData]: (state, action) => ({
    ...state,
    data: action.payload
  })
}

export default handleActions(handlers, defaultState)
