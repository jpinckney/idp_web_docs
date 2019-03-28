import { GET_ALL_DATA } from './types'
import axios from 'axios'

export const getAllData = () => dispatch => {
  axios.get('api/docs')
    .then(resp => {
      dispatch({
        type: GET_ALL_DATA,
        payload: resp.data
      })
    })
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