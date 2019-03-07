import React, { Component } from 'react'
import Auth from '../Auth/Auth'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <Auth />
      </div>
    )
  }
}
