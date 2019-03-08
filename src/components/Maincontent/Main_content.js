import React, { Component } from 'react'
import axios from 'axios'

export default class Main_content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    }
  }


  componentDidMount() {
    console.log(this.props.match.params.category)
    axios.get(`/docs/${this.props.match.params.category}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          category: res.data
        })
      })
  }

  
  hi(){
    const {category, topic, subtopic} = this.props.match.params
    axios.get(`/api/docs/${category}/${topic}/${subtopic}`)
  }

  render() {
    console.log(this.props)
    const {category} = this.state
    console.log(category)
    const mappedCategory = category.map(category => {
      return (
        <div>
          {/**render side bar here  */}
          {/**render category header  */}
          {/** subtopic content  */}
          <h4>{category.topic}</h4>
          <h4>{category.subtopic}</h4>
          <h4>{category.description}</h4>
          <h4>{category.syntax}</h4>
          <h4>{category.syntax_explanation}</h4>
          <h4>{category.example}</h4>
        </div>
      )
    })
    return (
      <div>
        Main_content
       {mappedCategory}
      </div>
    )
  }
}

// componentDidUpdate(prevProps) {
//   let { category } = this.props.match.params
//   if (category !== prevProps.match.params.category)
//     console.log(category)
//   axios.get(`/docs/${category}`)
//   .then(res => {
//     this.setState({
//       category: res.data
//     })
//   })
// }