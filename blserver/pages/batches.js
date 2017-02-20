import React from 'react'
import makePage from '../lib/makePage'
import { BatchesView } from '../components/BatchesView'
import fetch from 'isomorphic-fetch'

const getData = async function() {
  let data = {}
  try {
    const res = await fetch('http://localhost:4000/')
    const json = await res.json()
    data.batches = json
  } catch (e) {
    data.err = e.message
  }
  return data
}

export default makePage(() => (
        <BatchesView/>
  ), 
  getData
)