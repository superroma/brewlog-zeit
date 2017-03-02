import test from 'tape'
import {createBatch} from './actions'
import reducer from './reducers'
import {createStore} from 'redux'

const testBatches = [
    {id: 1, RecipeName: "London Pride", SessionDate: "01.01.2016"},
    {id: 2, RecipeName: "R&R Stout", SessionDate: "12.12.2016"},
    {id: 3, RecipeName: "R&R IPA", SessionDate: "01.01.2017"},
    {id: 4, RecipeName: "R&R IPA from server!", SessionDate: "05.05.2017"},
  ]

test('test create batch', t => {
  const state1 = {
    other: 'something',
    data: {
      batches: testBatches
    }
  }
  const state2 = reducer(state1, createBatch('APA'))
  console.log('state1: ',state1)
  console.log('state2: ',state2)
  t.equal(state2.data.batches.length, 5)
  t.end()
})

test('random redux test', t => {
  let init = { other: 'something'}

  const reducer = (state=init, action) => {
    switch (action.type) {
      case 'UPDATE':
        return {
          ...state,
          ...action.payload,
        }
    }
    return state
  }
  const update = (payload) => ({
    type: 'UPDATE',
    payload,
  })
  let store = createStore(reducer)

  store.dispatch(update({
    title: 'a title',
    data: {batches: []}
  }))
  t.deepEqual(store.getState(), {
    other: 'something',
    title: 'a title',
    data: {
      batches: []
    }
  })
  t.end()
})
