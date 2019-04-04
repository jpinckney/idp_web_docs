import { GET_ALL_DATA, CREATE_NOTE, UPLOAD_DATA } from './types'

const initialState = {
  id: 0,
  username: '',
  email: '',
  user_notes: [],
  docs: [],
  text_area: ''
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_DATA:
      return { ...state, docs: payload }
    case CREATE_NOTE:
      return { ...state, user_notes: payload }
    case UPLOAD_DATA:
      return { ...state, ...payload }
      case CREATE_NOTE:
      return {...state, user_notes: payload}
    default:
      return state
  }
}