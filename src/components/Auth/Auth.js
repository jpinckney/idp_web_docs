import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { upload_data } from '../../ducks/reducer'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showLogout: false,
      showRegister: false
    }
  }
// Auth is in control of what is being rendered based on if a user is logged in or logged out


  componentDidMount(){
    this.checkForUser()
  }

  toggleLogin = () => {
    this.setState({showLogin: !this.state.showLogin});
  }
  toggleLogout = () => {
    this.setState({showLogout: !this.state.showLogout});
  }
  toggleRegister = () => {
    this.setState({showRegister: !this.state.showRegister});
  }

  

  checkForUser = async () => {
    console.log('hit')
    const { id } = this.props
    if (!id) {
      try {
        let res = await axios.get('/auth/current-user')
        console.log(res.data)
        this.props.upload_data(res.data)
        this.toggleLogin()
        this.toggleLogout()
      } catch (err) {
        this.toggleLogin()
        console.log(err)
      }
    }
  }

  render(){
    console.log(this)
    return(
      <div>
        {this.props.username === '' 
        ?
          <div>
            {this.state.showLogin && 
              <Login 
                toggleLogin={this.toggleLogin} 
                toggleRegister={this.toggleRegister} 
                toggleLogout={this.toggleLogout}
              />
            }
            {this.state.showRegister && <Register 
            toggleLogin={this.toggleLogin}
            toggleRegister={this.toggleRegister}
            toggleLogout={this.toggleLogout}/>}
          </div>
        :
          <div>
            {this.state.showLogout && <Logout 
            toggleLogin={this.toggleLogin}
            toggleLogout={this.toggleLogout}/>}
          </div>
        }
      </div>
    )
  }

//   render() {
//     console.log(this.props)
//     const { username, password, email } = this.state
//     return (
//       <div>
//         <input placeholder='Username..'
//           value={ username }
//           onChange={ e => this.onInputChange('username', e.target.value) }></input>
//         <input placeholder='Password..'
//           value={ password }
//           onChange={ e => this.onInputChange('password', e.target.value) }></input>
//         <input placeholder='Email..'
//           value={ email }
//           onChange={ e => this.onInputChange('email', e.target.value) }></input>

        

//         {/* { this.props.username ? <input>logout</input> : <input>login</input> } */}
//         { this.props.username !== '' ? 
//           <button onClick={ this.onLogout }>Logout</button> :
//           <div>
//             <button onClick={ this.onLogin }>Login</button>  
//             <button onClick={ this.onRegister }>Register</button>
//           </div>
//         }

//       </div>
//     )
//   }
}

const mapStateToProps = reduxState => {
  return {
    id: reduxState.id,
    username: reduxState.username
  }
}
const mapDispatchToProps = {
  upload_data
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)