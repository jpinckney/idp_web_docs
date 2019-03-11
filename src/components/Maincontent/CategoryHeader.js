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
      <div>
        <h1>{ this.props.title }</h1>
      </div>
    )
  }
}

