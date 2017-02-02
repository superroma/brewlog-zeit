import React from 'react'
import { InventoryView } from '../components/Stubs'
import { NavBar } from '../components/NavBar'
import { getPathName } from '../getPathname'


export default class InventoryPage extends React.Component {
  static async getInitialProps (ctx) {
    return { pathname: getPathName(ctx) }
  }

  render () {
    return (
      <div>        
        <NavBar path={this.props.pathname}/>
        <InventoryView/>
      </div>
    )
  }
}