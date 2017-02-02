import React from 'react'
import { BatchesView } from '../components/BatchesView'
import { NavBar } from '../components/NavBar'
import { getPathName } from '../getPathname'
import fetch from 'isomorphic-fetch'


export default class BatchesPage extends React.Component {
  static async getInitialProps (ctx) {
    let data = {}
    try {
      const res = await fetch('http://localhost:4000/')
      const json = await res.json()
      data.batches = json
    } catch (e) {
      data.err = e.message
    }
    return { pathname: getPathName(ctx), data: data }
  }

  render () {
    return (
      <div>        
        <NavBar path={this.props.pathname}/>
        {this.props.data.batches?
          <BatchesView batches={this.props.data.batches}/>:
          this.props.data.err
        }  
      </div>
    )
  }
}