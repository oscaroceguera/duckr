import React, { PropTypes } from  'react'
import { connect } from 'react-redux'
import * as userActionCreators from 'redux/modules/users'
import { Authenticate } from 'components'
import { bindActionCreators } from 'redux'

const AuthenticateContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired
  },
  handleAuth () {
    this.props.fetchAndHandleAuthedUser()
  },
  render () {
    console.log('isFetching',this.props.isFetching);
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth}/>
    )
  }
})

function mapStateToProps (state) {
  return {
    isFetching: state.isFetching,
    error: state.error
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
