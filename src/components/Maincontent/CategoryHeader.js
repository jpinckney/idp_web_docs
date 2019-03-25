import React, { Component } from 'react'

export default class CategoryHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    }

  }

  render() {
    console.log(this.props)
    return (
      <div className='categoryHeader'>
        
        <h1>Welcome to { this.props.title }</h1>
      </div>
    )
  }
}

