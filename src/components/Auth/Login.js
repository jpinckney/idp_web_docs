import React, { Component } from 'react'
import axios from 'axios'
import {upload_data} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  // Login is responsible for displaying the login and register if a user is not logged in

  onInputChange(input, val) {
    this.setState({
      [ input ]: val
    })
  }

  onLogin = async () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try {
      let res = await axios.post('/auth/login', user)
      console.log(this)
      this.props.upload_data(res.data)
      this.props.toggleLogin()
      this.props.toggleLogout()
      console.log(res)
    } catch (err) {
      console.log(err)
      alert('incorrect username or password')
    }
  }
  
  render() {
    const {username, password} = this.state
    return (
      <div>
        <input placeholder='Username..'
          value={ username }
          onChange={ e => this.onInputChange('username', e.target.value) }></input>
        <input placeholder='Password..'
          value={ password }
          type='password'
          onChange={ e => this.onInputChange('password', e.target.value) }></input>

          <div>
            <button onClick={ this.onLogin }>Login</button>  
            <p>or</p>
            <button onClick={ () => {this.props.toggleLogin(); this.props.toggleRegister()} }>Register</button>
          </div>

      </div>
    )
  }
}

const mapDispatchToProps = {upload_data}
export default connect('', mapDispatchToProps)(Login)