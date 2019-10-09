import {
  fetchAuth
} from '../../common/effects'
import { ENDPOINTS } from './models'
import {
  setData
} from './actions'

export function getData () {
  return fetchAuth({
    url: ENDPOINTS.getData,
    method: 'GET'
  }).then((response) => {
    const { data } = response
    if (data) {
      return data
    }
    throw new Error('INVALID_RETURN')
  })
}

export default (dispatch, props) => ({
  getData: async () => {
    try {
      const response = await getData()
      if (response) {
        dispatch(setData(response))
        return response
      }
      return false
    } catch (err) {
      return false
    }
  }
})
