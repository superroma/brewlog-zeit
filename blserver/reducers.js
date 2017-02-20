import { combineReducers } from 'redux'

import {
    REQUEST_DATA, RECEIVE_DATA, RECEIVE_ERROR
} from './actions'

function dataReducer(state = {data:{}}, action) {
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
            return state
    }
}

export default dataReducer