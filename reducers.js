// Ducks



// Feed



//Listeners
export default function listeners (state = {}, action) {
  switch (action.type) {
    case ADD_LISTENER :
      return {
        ...state,
        [action.listenerId]: true,
      }
    default :
      return state
  }
}


//Modal



//Replies
const initialReply = {
  name: '',
  reply: '',
  uid: '',
  timestamp: 0,
  avatar: '',
  replyId: '',
}

function duckReplies (state = initialReply, action) {
  switch (action.type) {
    case ADD_REPLY :
      return {
        ...state,
        [action.reply.replyId]: action.reply,
      }
    case REMOVE_REPLY :
      return {
        ...state,
        [action.reply.replyId]: undefined,
      }
    default :
      return state
  }
}

const initialDuckState = {
  lastUpdated: Date.now(),
  replies: {},
}

function repliesAndLastUpated (state = initialDuckState, action) {
  switch (action.type) {
    case FETCHING_REPLIES_SUCCESS :
      return {
        ...state,
        lastUpdated: action.lastUpdated,
        replies: action.replies,
      }
    case ADD_REPLY :
    case REMOVE_REPLY :
      return {
        ...state,
        replies: duckReplies(state.replies, action),
      }
    default :
      return state
  }
}

const initialState = {
  isFetching: true,
  error: '',
}

export default function replies (state = initialState, action) {
  switch (action.type) {
    case FETCHING_REPLIES :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_REPLIES_ERROR :
    case ADD_REPLY_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case ADD_REPLY :
    case FETCHING_REPLIES_SUCCESS :
    case REMOVE_REPLY :
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.duckId]: repliesAndLastUpated(state[action.duckId], action),
      }
    default :
      return state
  }
}


//likeCount
function count (state = 0, action) {
  switch (action.type) {
    case ADD_LIKE :
      return state + 1
    case REMOVE_LIKE :
      return state - 1
    default :
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '',
}

export default function likeCount (state = initialState, action) {
  switch (action.type) {
    case FETCHING_COUNT :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_COUNT_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_COUNT_SUCCESS :
      return {
        ...state,
        ...initialState,
        [action.duckId]: action.count,
      }
    case ADD_LIKE :
    case REMOVE_LIKE :
      return typeof state[action.duckId] === 'undefined'
        ? state
        : {
          ...state,
          [action.duckId]: count(state[action.duckId], action),
        }
    default :
      return state
  }
}


//usersDucks


//usersLikes
const initialState = {
  isFetching: false,
  error: '',
}

export default function usersLikes (state = initialState, action) {
  const type = action.type
  switch (type) {
    case FETCHING_LIKES :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_LIKES_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_LIKES_SUCCESS :
      return {
        ...state,
        ...action.likes,
        isFetching: false,
        error: '',
      }
    case ADD_LIKE :
      return {
        ...state,
        [action.duckId]: true,
      }
    case REMOVE_LIKE :
      return Object.keys(state)
        .filter((duckId) => action.duckId !== duckId)
        .reduce((prev, current) => {
          prev[current] = state[current]
          return prev
        }, {})
    default :
      return state
  }
}
