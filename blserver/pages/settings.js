import React from 'react'
import { SettingsView } from '../components/Stubs'
import { NavBar } from '../components/NavBar'
import { getPathName } from '../getPathname'


export default class SettingsPage extends React.Component {
  static async getInitialProps (ctx) {
    return { pathname: getPathName(ctx) }
  }

  render () {
    return (
      <div>        
        <NavBar path={this.props.pathname}/>
        <SettingsView/>
      </div>
    )
  }
}