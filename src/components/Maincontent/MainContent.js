import React, { Component } from 'react'
import axios from 'axios'
import CategoryHeader from './CategoryHeader'
import Sidebar from './Sidebar';
import DetailedView from './DetailedView';
import Doc from './Doc'

export default class Main_content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    }
  }


  componentDidMount() {
    this.categorySelector()
  }

  categorySelector = () => {
    const { category } = this.props.match.params
    console.log({ category })
    axios.get(`/api/docs/${category}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          category: res.data
        })
      })
  }


  render() {
    const { category, topic, subtopic } = this.props.match.params

    return (
      <div>
        <CategoryHeader
          category={ category }
        />
        
        <Sidebar
          category={ category }
          topic={ topic }
          subtopic={ subtopic }
        />

        <Doc />
       

      </div>
    )
  }
}








