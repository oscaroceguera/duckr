import React, { PropTypes } from 'react'
import {
  mainContainer, container, content, repliesContainer,
  replyTextAreaContainer, replyTextArea } from './styles.css'
import { subHeader, darkBtn, errorMsg } from 'sharedStyles/styles.css'
import { DuckContainer, RepliesContainer } from 'containers'
import { formatReply } from 'helpers/utils'

function Reply ({submit}) {
  function handleSubmit (e) {
    if (Reply.ref.value === 0) {
      return
    }

    submit(Reply.ref.value)
    Reply.ref.value = ''

  }

  return (
    <div className={replyTextAreaContainer}>
      <textarea
        ref={(ref) => Reply.ref = ref}
        className={replyTextArea}
        maxLength={140}
        placeholder='Ypur response'
        type="text" />
      <button onClick={handleSubmit} className={darkBtn}>
        {'Submit'}
      </button>
    </div>
  )
}

DuckDetails.propTypes = {
  authedUser: PropTypes.object.isRequired,
  duckId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  addAndHandleReply: PropTypes.func.isRequired
}

export default function DuckDetails ({duckId, isFetching, authedUser, error, addAndHandleReply}) {
  return (
    <div className={mainContainer}>
      {isFetching === true
        ? <p className={subHeader}>{'Fetching'}</p>
        : <div className={container}>
            <div className={content}>
              <DuckContainer duckId={duckId} hideLikeCount={false} hideReplyBtn={true} />
              <Reply submit={(replyText) => addAndHandleReply(duckId, formatReply(authedUser, replyText))} />
            </div>
            <div className={repliesContainer}>
              <RepliesContainer duckId={duckId}/>
            </div>
          </div>
      }
      {error ? <p className={errorMsg}>{error}</p> : null}
    </div>
  )
}
