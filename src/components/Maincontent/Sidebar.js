import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    }
  }




  render() {
    const { category, topic, subtopic } = this.props
    console.log(this.props)
    return (
      <div>
        {/** ! Permanent Links */ }
        <Link to={ `/docs/react` }><h5>React</h5></Link>
        <Link to={ `/docs/javascript` }><h5>Javascript</h5></Link>
        <Link to={ `/docs/html` }><h5>HTML</h5></Link>
        {/** ! Permanent Links */ }
        {/** need to finish the above to have permanent links for the different categories */ }




        <h1>{ this.props.topic }</h1>
        <h2>{ this.props.subtopic }</h2>

        <Link to={ `/docs/javascript/objects` }><h4>Objects</h4></Link>

        <Link to={ `/docs/javascript/objects/object.assign` }><h6>Object.Assign</h6></Link>
        <Link to={ `/docs/javascript/objects/object.create` }><h6>Object.Create</h6></Link>
        
        <Link to={ `/docs/javascript/arrays` }><h4>Arrays</h4></Link>

        <Link to={ `/docs/javascript/arrays/array.map` }><h6>Array.map</h6></Link>
        <Link to={ `/docs/javascript/arrays/array.filter` }><h6>Array.filter</h6></Link>
        <Link to={ `/docs/javascript/arrays/array.splice` }><h6>Array.splice</h6></Link>

        <Link to={ `/docs/javascript/strings` }><h4>Strings</h4></Link>

        <Link to={ `/docs/javascript/strings/string.length` }><h6>String.length</h6></Link>
        <Link to={ `/docs/javascript/strings/string.toUpperCase` }><h6>String.toUpperCase</h6></Link>
        <Link to={ `/docs/javascript/strings/string.toLowerCase` }><h6>String.toLowerCase</h6></Link>

      </div>
    )
  }
}

















 // componentDidMount() {

    // this.getAllOfTheInfo()
  // }

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