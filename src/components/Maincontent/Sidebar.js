import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    }
  }

  componentDidMount() {
    // this.getAllOfTheInfo()
  }

  // getAllOfTheInfo = () => {
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

  // componentDidUpdate() {
  //   this.updateAllTheThings()
  //   console.log('hit the update')
  // }

  // updateAllTheThings = (prevProps) => {
  //   let { category } = this.props
  //   if (category !== prevProps.category)
  //     console.log(category)
  //   axios.get(`/docs/${category}`)
  //     .then(res => {
  //       this.setState({
  //         category: res.data
  //       })
  //       console.log(res.data)
  //     })
  // }


  render() {
    const { category, topic, subtopic } = this.props
    return (
      <div>
        {/** ! Permanent Links */ }
        <Link to={ `/docs/${category}` }><h5>{category}</h5></Link>
        <Link to={ `/docs/${category}` }><h5>{category}</h5></Link>
        <Link to={ `/docs/${category}` }><h5>{category}</h5></Link>
        {/** ! Permanent Links */ }

        <Link to={ `/docs/javascript/${topic}` }><h6>Objects</h6></Link>
        <h1>{ this.props.topic }</h1>

        {/* <Link to={ `/docs/javascript/${topic}/${subtopic}` }><h6>'Object.Assign()'</h6></Link> */ }

        {/* <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link> */}
      </div>
    )
  }
}
