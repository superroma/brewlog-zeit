import React from 'react'
import Root from '../containers/Root'
import { BatchesView } from '../components/BatchesView'
import { NavBar } from '../components/NavBar'
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
    return {data: data}
  }

  render () {
    return (
      <Root {...this.props}>
        {this.props.data.batches?
          <BatchesView batches={this.props.data.batches}/>:
          this.props.data.err
        }  
      </Root>
    )
  }
}