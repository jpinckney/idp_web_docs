import React, { Component } from 'react'
import Auth from '../Auth/Auth'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{background: 'red', height:'50px', width: '100%'}}>
        <Auth />
      </div>
    )
  }
}
