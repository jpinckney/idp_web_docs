import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Subtopic extends Component {


  componentDidMount() {
    this.dataSelector()
  }

  dataSelector = () => {
    const { topic, subtopic, category} = this.props.match.params
    axios.get(`/api/docs/getData/${category}/${topic}/${subtopic}`)
      .then(res => {
        console.log({ res })
      // setstate with the data and then render it
      })
  }

  render() {

    console.log(this.props.match.params)
    console.log(this.props.match)
    return (
      <div>
        
        Detailed View
      </div>
    )
  }
}


export default withRouter(Subtopic)