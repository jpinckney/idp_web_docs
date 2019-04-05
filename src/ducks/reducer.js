import { GET_ALL_DATA, CREATE_NOTE, UPLOAD_DATA, TOGGLE_MOBILE_NAV, UPDATE_NOTE, DELETE_NOTE } from './types'

const initialState = {
  id: 0,
  username: '',
  email: '',
  text_area: '',
  user_notes: [],
  docs: [],
  mobileNavIsVisible: false
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
      return { ...state, user_notes: payload }

    case TOGGLE_MOBILE_NAV: {
      const mobileNavIsVisible = state.mobileNavIsVisible;
      return { ...state, mobileNavIsVisible: !mobileNavIsVisible }
    }
    case UPDATE_NOTE: {
      return {...state, user_notes: payload}
    }
    case DELETE_NOTE: {
      return {...state, user_notes: payload}
    }
      
    default:
      return state
  }
}