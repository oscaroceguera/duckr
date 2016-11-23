import { bindActionCreators } from 'redux'
import { Modal } from 'components'
import { connect } from 'react-redux'
import * as ModalActionsCreators from 'redux/modules/modal'

function mapStateToProps({modal, users}, props) {
  const duckTextLength = modal.duckText.length
  return {
    user: users[users.authedId] ? users[users.authedId].info : {},
    duckText: modal.duckText,
    isOpen: modal.isOpen,
    isSubmitDisabled: duckTextLength <= 0 || duckTextLength > 140,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ModalActionsCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
