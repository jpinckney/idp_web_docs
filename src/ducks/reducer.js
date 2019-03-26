import { GET_ALL_DATA } from './types'

const initialState = {
  id: 0,
  username: '',
  email: '',
  title: '',
  usernotes: '',
  docs: []
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_DATA:
      return { ...state, docs: payload }
    default:
      return state
  }
}