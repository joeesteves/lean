import React from 'react'
import MenuItem from '../components/menuItem'

export default (props) => (
  <ul className="nav nav-pills">
    <MenuItem currentClass={props.isActive('home')} activateLink={props.activateLink.bind(this, 'home')} goTo="/" iconClass="fa fa-home fa-4x" />
    <MenuItem currentClass={props.isActive('compras')} activateLink={props.activateLink.bind(this, 'compras')} goTo="/compras" iconClass="fa fa-shopping-cart fa-4x" />
    <MenuItem currentClass={props.isActive('perfil')} activateLink={props.activateLink.bind(this, 'perfil')} goTo="/perfil" iconClass="fa fa-user fa-4x" />
    <MenuItem currentClass={props.isActive('team')} activateLink={props.activateLink.bind(this, 'team')} goTo="/team" iconClass="fa fa-users fa-4x" />
  </ul>
)