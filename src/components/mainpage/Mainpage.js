import React, { Component } from 'react'
// import Sidebar from '../Sidebar/Sidebar'
import Reacted from '../../icons/Reacted'
import HTML from '../../icons/HTML'
import Javascript from '../../icons/Javascript'
import NodeIcon from '../../icons/NodeIcon'
import Css from '../../icons/Css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllData } from '../../ducks/actions'



// https://icongr.am/devicon

class Mainpage extends Component {

  componentDidMount() {
    this.props.getAllData()
  }

 


  render() {
    return (
      <div >

        <div className='devicons'>

          <Link to={ '/docs/reactjs' }>
            <Reacted />
          </Link>

          <Link to={ '/docs/javascript' }>
            <Javascript />
          </Link>

          <Link to={ '/docs/html' }>
            <HTML />
          </Link>

          <Link to={ '/docs/nodejs' }>
            <NodeIcon />
          </Link>
          <Link to={ '/docs/css' }>
            <Css />
          </Link>
        </div>
      </div>
    )
  }
}


const mapStateToProps = reduxState => {
  return {
    category: reduxState.category
  }
}

const mapDispatchToProps = dispatch => ({
  getAllData: () => dispatch(getAllData())
})


export default connect(mapStateToProps, mapDispatchToProps)(Mainpage)