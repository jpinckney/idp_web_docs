import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upload_data, createNote, updateNote, deleteNote } from '../../../ducks/actions'
import DisplayNotes from './DisplayNotes'

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text_area: '',
      user_notes: []
    }
  }

  onChangeHandler = (val) => {
    this.setState({
      text_area: val
    })
  }
  render() {
    const mappedUser_Notes = this.props.user_notes.map(note => {
      return (
        <DisplayNotes 
        key={note.user_notes_id}
        note={note}
        state={this.state}
        />
        )
      })
      return (
      <div>
        <h1>Add a Note</h1>
        <form >
          <div>
            <label>Category:</label>
            <br />
            <select>
              <option value='React'>React</option>
              <option value='Javascript'>Javascript</option>
              <option value='HTML'>HTML</option>
              <option value='NodeJS'>NodeJS</option>
              <option value='CSS'>CSS</option>
            </select>
          </div>
          <br />
          <div>
            <label></label>
            <br />
            <textarea value={ this.state.text_area } onChange={ (e) => this.onChangeHandler(e.target.value) } placeholder='Type your note here'></textarea>
            <button onClick={ () => this.props.createNote(this.state.text_area) }>Save</button>
            <button>Cancel</button>
            
            
          </div>
        </form>

        {mappedUser_Notes}
      </div>

    )
  }
}


const mapStateToProps = reduxState => {
  return {
    text_area: reduxState.text_area,
    user_notes: reduxState.user_notes
  }
}

// const mapDispatchToProps = dispatch => ({
//   upload_data: () => dispatch(upload_data),
//   createNote: () => dispatch(createNote)
// })


export default connect(mapStateToProps, { upload_data, createNote, updateNote, deleteNote })(NoteForm)