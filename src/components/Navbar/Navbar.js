import React, { Component } from 'react'
import Auth from '../Auth/Auth'
import Idp_web_docs from '../../icons/idp_web-docs.png'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import More from '../../icons/More'
import { toggleMobileNav } from '../../ducks/actions'

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <Link to='/'><img className='logo' src={ Idp_web_docs } alt='Elephant Logo'></img></Link>
        
        <p className='title'>
          idp_web_docs
          <span className='subtitle'>Welcome Scrub</span>
        </p>

        <button className='mobile-nav-toggle' onClick={() => {this.toggleNav()}}><More vertical/></button>
        

      </div>
    )
  }

  toggleNav() {
    this.props.toggleMobileNav();
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMobileNav: () => dispatch(toggleMobileNav())
  }
}

export default connect(null, mapDispatchToProps)(Navbar)