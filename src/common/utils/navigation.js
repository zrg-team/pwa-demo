// import storeAccessible from './storeAccessible'

export function getDataFromNavigation (history) {
  try {
    const { location } = history
    return location.state
  } catch (err) {
    return null
  }
}

export function parseQueryString (data) {
  if (!data) {
    return {}
  }
  const pairs = data.slice(1).split('&')
  const result = {}
  pairs.forEach(function (pair) {
    pair = pair.split('=')
    if (pair.length > 1 && pair[0]) {
      result[pair[0]] = pair[1] || ''
    }
  })
  return result
}
