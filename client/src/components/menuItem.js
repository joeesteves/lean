import React from 'react'
import { Link } from 'react-router-dom'


export default (props) => (
  <li role="presentation" className={props.currentClass} onClick={props.activateLink}>
    <Link to={props.goTo}>
      <i className={props.iconClass} aria-hidden="true"></i>
    </Link>
  </li>)