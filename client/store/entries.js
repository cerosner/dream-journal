import axios from 'axios'

// initial state
const initialEntryState = {
  allEntries: [],
  selectedEntry: {}
}

// action types
const GOT_ENTRIES = 'GOT_ENTRIES'
const ADDED_ENTRY = 'ADDED_ENTRY'

// action creators
const gotEntries = entries => ({
  type: GOT_ENTRIES,
  entries
})

const addedEntry = entry => ({
  type: ADDED_ENTRY,
  entry
})

// thunks
export const getEntries = () => dispatch => {
  axios.get('/api/entries')
  .then(res => {
    dispatch(gotEntries(res.data))
  })
  .catch(console.error())
}

export const addEntry = entry => dispatch => {
  axios.post('/api/entries', entry)
  .then(res => {
    console.log(res.data)
    dispatch(addedEntry(res.data))
  })
  .catch(console.error())
}

// reducer
export default (state = initialEntryState, action) => {
  switch (action.type) {
    case GOT_ENTRIES:
      return {
        ...state,
        allEntries: action.entries
      }
    case ADDED_ENTRY:
      return {
        ...state,
        allEntries: [...state.allEntries, action.entry]
      }
    default:
      return state
  }
}
