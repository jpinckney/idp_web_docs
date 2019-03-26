import React, { Component } from 'react'

export default class CategoryHeader extends Component {
 

  render() {
    return (
      <div className='categoryHeader'>
        
        <h1>Welcome to { this.props.title }</h1>
      </div>
    )
  }
}

