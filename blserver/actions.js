import fetch from 'isomorphic-fetch'

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const RECEIVE_ERROR = 'RECEIVE_ERROR'

// function requestData(dataPath) {
//     return {
//         type: REQUEST_DATA,
//         dataPath
//     }
// }

// function receiveData(dataPath, json) {
//     return {
//         type: RECEIVE_DATA,
//         dataPath,
//         data: json,
//         receivedAt: Date.now()
//     }
// }
// function receiveError(dataPath, err) {
//     return {
//         type: RECIEVE_ERROR,
//         dataPath,
//         err,
//         receivedAt: Date.now()
//     }
// }

export function fetchData(dataPath) {
    console.log('fetchData: ', dataPath)
    return (dispatch) => {
       return fetch(`http://localhost:4000/${dataPath}`)
        .then(res => res.json())
        .then (
            data => dispatch({type: RECEIVE_DATA, dataPath, data}),
            err => dispatch({type: RECEIVE_ERROR, err})
        )
    }
}