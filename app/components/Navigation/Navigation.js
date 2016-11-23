import React from 'react'
import { Link } from 'react-router'
import { container, navContainer, link } from './styles.css'
import { ModalContainer } from 'containers'

const { bool } = React.PropTypes

Navigation.propTypes = ActionLinks.propTypes = Navlinks.propTypes = {
  isAuthed: bool.isRequired
}

function Navlinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li><Link className={link} to='/'>{'Home'}</Link></li>
      </ul>
    : null
}

function ActionLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li><ModalContainer/></li>
        <li><Link className={link} to='/logout'>{'Logout'}</Link></li>
      </ul>
    : <ul>
        <li><Link className={link} to='/'>{'Home'}</Link></li>
        <li><Link className={link} to='/auth'>{'Authenticated'}</Link></li>
      </ul>
}

export default function Navigation ({isAuthed}) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <Navlinks isAuthed={isAuthed}/>
        <ActionLinks isAuthed={isAuthed}/>
      </nav>
    </div>
  )
}
