const initialState = {
  id: 0,
  username: '',
  email: '',
  title: '',
  usernotes: ''
}

// ACTION TYPES
const UPLOAD_DATA = 'UPLOAD_DATA'

// ACTION CREATOR
export function upload_data(data){
  console.log({data})
  return{
      type: UPLOAD_DATA,
      payload: data
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  console.log(type)
  switch (type) {
    
    case UPLOAD_DATA:
    return {...state, ...payload}
    default:
      return state
  }
}