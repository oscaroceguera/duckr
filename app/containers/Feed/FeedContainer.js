import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Feed } from 'components'
import * as feedActionCreators from 'redux/modules/feed'

const FeedContainer = React.createClass({
  propTypes: {
    newDucksAvailable: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    setHandleFeedListener: PropTypes.func.isRequired,
    resetNewDucksAvailable: PropTypes.func.isRequired
  },
  componentDidMount () {
    // set a listener to ducks
    this.props.setHandleFeedListener()
  },
  render() {
    return (
      <Feed
        newDucksAvailable={this.props.newDucksAvailable}
        error={this.props.error}
        isFetching={this.props.isFetching}
        resetNewDucksAvailable={this.props.resetNewDucksAvailable}/>
    )
  }
})

function mapStateToProps ({feed}) {
  const { newDucksAvailable, error, isFetching } = feed
  return {
    newDucksAvailable,
    error,
    isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(feedActionCreators, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(FeedContainer)
