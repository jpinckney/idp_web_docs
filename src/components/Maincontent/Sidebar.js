import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {/* <ul> <h4><Link to=''>ghh</Link></h4>
          <li><Link to=''>adhaa</Link></li>
          <li></li>
        </ul> */}

        <Link to={`/docs/${'reactjs'}`}><h5>React</h5></Link>
        <Link to={`/docs/${'javascript'}`}><h5>Javacript</h5></Link>
        <Link to={`/docs/${'html'}`}><h5>HTML</h5></Link>
        {/* <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link> */}
      </div>
    )
  }
}
