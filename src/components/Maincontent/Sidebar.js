import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      topic: '',
      subtopic: ''
    }
  }

// componentDidMount(){

// }


  render() {
    const {category} = this.props.match.params
    return (
      <div>
        {/** ! Permanent Links */}
        <Link to={ `/api/docs/${category}` }><h5>React</h5></Link>
        <Link to={ `/api/docs/${category}` }><h5>Javacript</h5></Link>
        <Link to={ `/api/docs/${category}` }><h5>HTML</h5></Link>
        {/** ! Permanent Links */}
        
        {/* <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link> */}
      </div>
    )
  }
}
