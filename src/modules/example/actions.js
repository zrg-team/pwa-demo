import { createAction } from 'redux-actions'
import { MODULE_NAME } from './models'

export const setData = createAction(`${MODULE_NAME}_SET_DATA`)
