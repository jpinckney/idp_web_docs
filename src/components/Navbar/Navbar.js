import React, { Component } from 'react'
import Auth from '../Auth/Auth'
import Idp_web_docs from '../../icons/idp_web-docs.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <img className='logo' src={ Idp_web_docs } alt='Elephant Logo'></img>
        <p className='title'>
          idp_web_docs
          <span className='subtitle'>Welcome Scrub</span>
        </p>
        <Auth />

      </div>
    )
  }
}
