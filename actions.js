


// Ducks


// Feed
{
  type: SETTING_FEED_LISTENER,
}

{
  type: SETTING_FEED_LISTENER_ERROR,
  error: 'Error fetching feeds.',
}

{
  type: SETTING_FEED_LISTENER_SUCCESS,
  duckIds,
}

{
  type: ADD_NEW_DUCK_ID_TO_FEED,
  duckId,
}

{
  type: RESET_NEW_DUCKS_AVAILABLE,
}


//Listeners
{
  type: ADD_LISTENER,
  listenerId,
}


//Modal



//Replies
{
  type: ADD_REPLY,
  duckId,
  reply,
}

{
  type: ADD_REPLY_ERROR,
  error: 'Error adding reply',
}

{
  type: REMOVE_REPLY,
  replyId,
}

{
  type: FETCHING_REPLIES,
}

{
  type: FETCHING_REPLIES_ERROR,
  error: 'Error fetching replies',
}

{
  type: FETCHING_REPLIES_SUCCESS,
  replies,
  duckId,
  lastUpdated: Date.now(),
}


// likeCount
{
  type: FETCHING_COUNT,
}

{
  type: FETCHING_COUNT_ERROR,
  error: 'Error fetching duck\'s like count',
}

{
  type: FETCHING_COUNT_SUCCESS,
  duckId,
  count,
}


//usersDucks


// usersLikes
{
  type: ADD_LIKE,
  duckId,
}

{
  type: REMOVE_LIKE,
  duckId,
}

{
  type: FETCHING_LIKES,
}

{
  type: FETCHING_LIKES_ERROR,
  error: 'Error fetching likes',
}

{
  type: FETCHING_LIKES_SUCCESS,
  likes,
}
