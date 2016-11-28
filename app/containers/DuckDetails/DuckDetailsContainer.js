import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { DuckDetails } from 'components'
import { bindActionCreators } from 'redux'
import * as duckActionCreators from 'redux/modules/ducks'
import * as likeCountActionCreators from 'redux/modules/likeCount'
import * as repliesActionCreators from 'redux/modules/replies'

const DuckDetailsContainer = React.createClass({
  propTypes: {
    authedUser: PropTypes.object.isRequired,
    duckId: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    duckAlreadyFetched: PropTypes.bool.isRequired,
    removeFetching: PropTypes.func.isRequired,
    fetchAndHAndleDuck: PropTypes.func.isRequired,
    initLikeFetch: PropTypes.func.isRequired,
    addAndHandleReply: PropTypes.func.isRequired
  },
  componentDidMount () {
    this.props.initLikeFetch(this.props.duckId)
    if (this.props.duckAlreadyFetched === false) {
      // fetch duck and save to store
      this.props.fetchAndHAndleDuck(this.props.duckId)
    } else {
      // set isFetching to false
      this.props.removeFetching()
    }
  },
  render () {
    return (
      <DuckDetails
        addAndHandleReply={this.props.addAndHandleReply}
        authedUser={this.props.authedUser}
        duckId={this.props.duckId}
        isFetching={this.props.isFetching}
        error={this.props.error}/>
    )
  }
})

function mapStateToProps ({ducks, likeCount, users}, props) {
  return  {
    isFetching: ducks.get('isFetching') || likeCount.isFetching,
    error: ducks.get('error'),
    authedUser: users[users.authedId].info,
    duckId: props.routeParams.duckId,
    duckAlreadyFetched: !!ducks.get(props.routeParams.duckId)
  }
}

function mapdispatchToProps (dispatch) {
  return bindActionCreators({
    ...duckActionCreators,
    ...likeCountActionCreators,
    ...repliesActionCreators
  }, dispatch)
}

export default connect(mapStateToProps, mapdispatchToProps)(DuckDetailsContainer)
