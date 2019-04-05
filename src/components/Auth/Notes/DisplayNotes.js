import React from 'react'
import { upload_data, createNote, updateNote, deleteNote } from '../../../ducks/actions'
import { connect } from 'react-redux'

function DisplayNotes(props) {
  return (
    <div className='displayNote'>
      <h1>{props.note.notes}</h1>
      <button onClick={()=>props.deleteNote(props.note)}>Delete</button>
      <button onClick={()=>props.updateNote(props.state.text_area, props.note)}>Update</button>
    </div>
  )
}

const mapStateToProps = reduxState => {
  return {
    text_area: reduxState.text_area,
    user_notes: reduxState.user_notes
  }
}

export default connect(mapStateToProps, { upload_data, createNote, updateNote, deleteNote })(DisplayNotes)