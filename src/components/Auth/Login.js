import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { upload_data } from '../../ducks/actions'
import Button from '@material-ui/core/Button';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
      let res = await axios.post('/api/auth/login', user)
      console.log(res.data)
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
    const { username, password } = this.state
    return (
      <div className='login-buttons'>
        <Button onClick={this.onLogin}>Login</Button>
        <Button onClick={this.onLogin}>Register</Button>
        


{/**
* ! below is functionality for original login / register
*/}

        {/* <h5>Login</h5>
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
          <button onClick={ () => { this.props.toggleLogin(); this.props.toggleRegister() } }>Register</button>
        </div> */}

      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({ upload_data })

export default connect('', mapDispatchToProps)(Login)