import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

class DetailedView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    }
  }



  componentDidMount() {
    this.dataSelector()
  }

  dataSelector = () => {
    const { topic, subtopic, category } = this.props.match.params
    axios.get(`/api/docs/getData/${category}/${topic}/${subtopic}`)
      .then(res => {
        this.props.upload_data([res.data])
      })
  }

  render() {

    const { category } = this.state
    const mappedCategoryData = category.map(category => {
      return (
        <div>

        </div>
      )
    })

    return (
      <div className='detailedView'>

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
const mapDispatchToProps = dispatch => {
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailedView))