import { GET_ALL_DATA, CREATE_NOTE, UPLOAD_DATA, GET_USER_NOTES, UPDATE_NOTE, DELETE_NOTE } from './types'
import axios from 'axios'

// This is being used in Mainpage.js
export const getAllData = () => dispatch => {
  axios.get('api/docs')
    .then(resp => {
      console.log(resp)
      dispatch({
        type: GET_ALL_DATA,
        payload: resp.data
      })
    })
}

// Create a Note
export const createNote = (users_notes) => dispatch => {
  axios.post('/api/docs/createNote', { users_notes }).then(resp => {
    console.log(resp.data)
    dispatch({
      type: CREATE_NOTE,
      payload: resp.data
    })
  })
}

// Update a Note
export const updateNote = (user_note, note_id) => dispatch => {
  // const { note_id } = this.props.match.params
  console.log(note_id)
  axios.put(`/api/docs/updateNote/${note_id}`, { user_note }).then(resp => {
    dispatch({
      type: UPDATE_NOTE,
      payload: resp.data
    })
  })
}

// Delete a Note
export const deleteNote = (note_id) => dispatch => {
  // const { note_id } = this.props.match.params
  axios.delete(`/api/docs/updateNote/${note_id}`, { note_id }).then(resp => {
    dispatch({
      type: DELETE_NOTE,
      payload: resp.data
    })
  })
}

// Get all User Notes
export const getUserNotes = () => dispatch => {
  axios.get('/api/docs/getUserNotes').then(resp => {
    dispatch({
      type: GET_USER_NOTES,
      payload: resp.data
    })
  })
}

// * ./src/components/Auth/
// ! Login / Register / Logout / Auth use this action

export const upload_data = (data) => dispatch => {
  return {
    type: UPLOAD_DATA,
    payload: data
  }
}










// export const dataSelector = () => dispatch => {
//   const { topic, subtopic, category } = this.props.match.params
//   axios.get(`/api/docs/getData/${category}/${topic}/${subtopic}`)
//     .then(resp => {
//       dispatch({
//         type: DATA_SELECTOR,
//         payload: resp.data
//       })
//     })
// }

// dispatch is a function that passes an action to a function in the reducer - pass it a parameter which will be an action.type && action.payload