import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upload_data } from '../../ducks/reducer'
import '../../App.css'
import axios from 'axios'

class Text_area extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      usernote: ''
    }
  }

  onInputChange(input, val) {
    this.setState({
      [ input ]: val
    })
  }


  onNoteSubmit() {
    axios.post('/user_note')
  }

  render() {
    const { usernote } = this.state
    return (
      <div className='textarea_border'>
        <div>
          <input
            className='title_text_area' placeholder='Title...'
            value={ usernote }
            onChange={ e => this.onInputChange('usernote', e.target.value) }
          ></input>
        </div>
        <br />
        <textarea placeholder='Write a note you fool.. ¯\_(ツ)_/¯'>
        </textarea>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    title: reduxState.title,
    usernote: reduxState.usernote
    
  }
}

const mapDispatchToProps = { upload_data }

export default connect(mapStateToProps, mapDispatchToProps)(Text_area)