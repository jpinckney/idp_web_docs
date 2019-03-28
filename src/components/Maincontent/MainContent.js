import React, { Component } from 'react'
import axios from 'axios'
import CategoryHeader from './CategoryHeader'
import Sidebar from './Sidebar';
import ConditionalRenderingComponents from './ConditionalRenderingComponents'

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
        {/** maybe i can create a ConditionalRender component... this component will be in charge of the logic of the ternary below. thus allowing me to remove the ternary and to just render the ConditionalRender component*/ }

        <ConditionalRenderingComponents {...this.props}/>


      </div>
    )
  }
}








