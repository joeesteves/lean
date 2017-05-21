import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BuyContainer from './buyContainer'
import HomeContainer from './homeContainer'
import PerfilContainer from './perfilContainer'
import TeamContainer from './teamContainer'
import MenuContainer from './menuContainer'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: 'home'
    }
  }
  activateLink(linkToActivate, se) {
    this.setState({ activeLink: linkToActivate })
  }

  isActive(link) {
    return link === this.state.activeLink ? 'active' : ''
  }

  render() {
    return (
      <Router>
        <div>
          <MenuContainer className='text-center' isActive={this.isActive.bind(this)} activateLink={this.activateLink.bind(this)} />
          <hr />

          <Route exact path="/" component={HomeContainer} />
          <Route path="/compras" component={BuyContainer} />
          <Route path="/perfil" component={PerfilContainer} />
          <Route path="/team" component={TeamContainer} />

        </div>
      </Router>
    )
  }
}

export default MainContainer