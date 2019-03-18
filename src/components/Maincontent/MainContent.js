import React, { Component } from 'react'
import axios from 'axios'
import CategoryHeader from './CategoryHeader'
import Sidebar from './Sidebar';
import DetailedView from './DetailedView'

export default class Main_content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    }
  }



  // componentDidMount() {
  //   const { category } = this.props.match.params
  //   console.log({ category })
  //   axios.get(`/api/docs/${category}`)
  //     .then(res => {
  //       console.log(res.data)
  //       this.setState({
  //         category: res.data
  //       })
  //     })
  // }



  render() {
    const { category, topic, subtopic } = this.props.match.params
    return (
      <div>
        <CategoryHeader
          title={ category }
        />
        <Sidebar
          category={ category }
          topic={ topic }
          subtopic={ subtopic }
        />

        <DetailedView 
        
        />

      </div>
    )
  }
}








// notsureyet(){
//   const {category, topic, subtopic} = this.props.match.params
//   axios.get(`/api/docs/${category}/${topic}/${subtopic}`)
// }