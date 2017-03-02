import { combineReducers } from 'redux'

import {
    REQUEST_DATA, RECEIVE_DATA, RECEIVE_ERROR, CREATE_BATCH
} from './actions'

const batches = (state=[], action) => {
  switch (action.type) {
    case CREATE_BATCH:
      return (
        [...state,
          {name: action.name, date: Date.now()}
        ])
    default:
      return state
  }
}

const data = (state = {}, action) => {

    switch (action.type) {
        case REQUEST_DATA:
            return state

        case RECEIVE_DATA:
            return {...state,
                data: {
                    [action.dataPath]:action.data
                }
            }
        default:
            return {...state,
              batches: batches(state.batches, action)
            }
    }
}

export default combineReducers({
  data
})
