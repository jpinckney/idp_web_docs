import React, { Component } from 'react'
// import axios from 'axios'
import CategoryHeader from './CategoryHeader'
import Sidebar from './Sidebar';
import DetailedView from './DetailedView'

export default class Main_content extends Component {
 






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
          category={ category }
          topic={ topic }
          subtopic={ subtopic }
        />

      </div>
    )
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







// notsureyet(){
  //   const {category, topic, subtopic} = this.props.match.params
  //   axios.get(`/api/docs/${category}/${topic}/${subtopic}`)
  // }