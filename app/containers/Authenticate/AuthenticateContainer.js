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
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  handleAuth (e) {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => this.context.router.replace('feed'))
  },
  render () {
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth}/>
    )
  }
})

export default connect(
  ({users}) => ({isFetching: users.isFetching, error: users.error}),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateContainer)
