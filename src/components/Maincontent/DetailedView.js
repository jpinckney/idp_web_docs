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
      
      })
  }





  render() {
const {description} = this.props
    console.log(this.props.match.params)
    return (
      <div>
        {description}
        Detailed View
      </div>
    )
  }
}


export default withRouter(Subtopic)