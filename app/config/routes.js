import React from 'react'
import { Router, IndexRoute } from 'react-router'
import {
  MainContainer, HomeContainer, AuthenticateContainer,
  FeedContainer, LogoutContainer, UserContainer, DuckDetailsContainer } from 'containers'

export default function getRoutes (checkAuth, history) {
  return (
    <Router history={history}>
      <Router path='/' component={MainContainer}>
        <Router path='auth' component={AuthenticateContainer} onEnter={checkAuth}/>
        <Router path='feed' component={FeedContainer} onEnter={checkAuth}/>
        <Router path='logout' component={LogoutContainer} />
        <Router path='/:uid' component={UserContainer} onEnter={checkAuth}/>
        <Router path='/duckDetail/:duckId' component={DuckDetailsContainer} onEnter={checkAuth}/>
        <IndexRoute component={HomeContainer} onEnter={checkAuth} />
      </Router>
    </Router>
  )
}
