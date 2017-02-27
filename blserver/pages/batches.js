import React from 'react'
import makePage from '../lib/makePage'
import { BatchesView } from '../components/BatchesView'

export default makePage(() => (
        <BatchesView/>
  ), 'batches'
)