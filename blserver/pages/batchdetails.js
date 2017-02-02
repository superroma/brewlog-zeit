import React from 'react'
import { BatchDetailView } from '../components/BatchDetailView'
import { NavBar } from '../components/NavBar'
import { getPathName } from '../getPathname'


export default class BatchDetailPage extends React.Component {
  static async getInitialProps (ctx) {
    return { pathname: getPathName(ctx) }
  }

  render () {
    return (
      <div>        
        <NavBar path={this.props.pathname}/>
        <BatchDetailView/>
      </div>
    )
  }
}