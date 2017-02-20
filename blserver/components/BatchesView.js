import React, {PropTypes} from 'react'
import { connect } from 'react-redux'

const BatchListItem = ({RecipeName, SessionDate}) => (
  <a href="#" className="list-group-item justify-content-between">
    <span className="">{RecipeName}</span>
    <span className="badge badge-pill badge-default">
      {SessionDate}
    </span>
  </a>
)

const BatchList = ({batches}) => (
  <div className="card">
    <h4 className="card-header">Batches</h4>
    <div className="card-block">
      <button className="btn btn-primary">New Batch</button>
      <div className="list-group">
        {batches.map(
          ({id, RecipeName, SessionDate}) => 
            <BatchListItem key={id} RecipeName={RecipeName} SessionDate={SessionDate} />
          )}
      </div>
    </div>
    <div className="card-footer">footer</div>
  </div>
)

BatchList.propTypes = { 
  batches: PropTypes.array.isRequired 
}

export const BatchesView = connect(state => state.data)(({batches, err}) => {
    if (batches) {
      return ( <BatchList batches={batches}/> )
    } else {
      return ( <h3>{err}</h3> )
    }
  }
)
