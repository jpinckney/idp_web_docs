import React, { Component } from 'react'

export default class NoteForm extends Component {




  render() {
    return (
      <div>
        <h1>Add a Note</h1>
        <form onSubmit={ this.onButtonSubmit }>
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
            <textarea placeholder='Type your note here'></textarea>
            <button>Save</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}
