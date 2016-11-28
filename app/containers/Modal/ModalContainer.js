import { bindActionCreators } from 'redux'
import { Modal } from 'components'
import { connect } from 'react-redux'
import * as ModalActionsCreators from 'redux/modules/modal'
import * as ducksActionsCreators from 'redux/modules/ducks'

function mapStateToProps({modal, users}, props) {
  const duckTextLength = modal.get('duckText').length
  return {
    user: users[users.authedId] ? users[users.authedId].info : {},
    duckText: modal.get('duckText'),
    isOpen: modal.get('isOpen'),
    isSubmitDisabled: duckTextLength <= 0 || duckTextLength > 140,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({...ModalActionsCreators, ...ducksActionsCreators}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
