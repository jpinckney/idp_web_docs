import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upload_data, createNote, updateNote, deleteNote } from '../../../ducks/actions'

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
            <button onClick={()=>this.props.updateNote(this.state.text_area)}>Update</button>
            <button onClick={()=>this.props.deleteNote()}>Update</button>
          </div>
        </form>

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