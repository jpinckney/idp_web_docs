import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { upload_data } from '../../ducks/reducer'

class DetailedView extends Component {


  componentDidMount() {
    this.dataSelector()
  }

  dataSelector = () => {
    const { topic, subtopic, category } = this.props.match.params
    axios.get(`/api/docs/getData/${category}/${topic}/${subtopic}`)
      .then(res => {
        console.log({ res })
        this.props.upload_data(res.data)
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

const mapStateToProps = reduxState => {
  return {
    category: reduxState.category
  }
}
const mapDispatchToProps = {
  upload_data
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailedView))