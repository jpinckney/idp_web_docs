import React, { Component } from 'react'
import axios from 'axios'
import {getUserNotes} from '../../../ducks/actions' 

export default class MyNotes extends Component {

  componentDidMount(){
    this.props.getUserNotes()
  }

  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({ getUserNotes })

export default connect('', mapDispatchToProps)(MyNotes)