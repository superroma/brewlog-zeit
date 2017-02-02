import React from 'react'
import { BatchesView } from '../components/BatchesView'
import { NavBar } from '../components/NavBar'
import { getPathName } from '../getPathname'


export default class BatchesPage extends React.Component {
  static async getInitialProps (ctx) {
    return { pathname: getPathName(ctx) }
  }

  render () {
    return (
      <div>        
        <NavBar path={this.props.pathname}/>
        <BatchesView/>
      </div>
    )
  }
}