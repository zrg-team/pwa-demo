import { connect } from 'react-redux'
import Demo from '../components/Demo'
import exampleHandlers from '../handlers'
// import { MODULE_NAME as MODULE_HOME } from '../models'

const mapDispatchToProps = (dispatch, props) => ({
  ...exampleHandlers(dispatch, props)
})

const mapStateToProps = (state, props) => {
  // TODO: Only map something usefull
  return {
    // data: state[MODULE_HOME].data
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo)
