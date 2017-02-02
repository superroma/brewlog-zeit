import React from 'react'
import { HomeView } from '../components/Stubs'
import { NavBar } from '../components/NavBar'
import { getPathName } from '../getPathname'


export default class HomePage extends React.Component {
  static async getInitialProps (ctx) {
    return { pathname: getPathName(ctx) }
  }

  render () {
    return (
      <div>        
        <NavBar path={this.props.pathname}/>
        <HomeView/>
      </div>
    )
  }
}
