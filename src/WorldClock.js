import React, { Component } from 'react';
import axios from 'axios'


class WorldClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      dayOfWeek: '',
      timeZoneName: ''
    }
  }
  

  componentDidMount(){
    axios.get('http://worldclockapi.com/api/json/utc/now').then(res => {
      console.log(res)
      this.setState({
        time: res.data.currentDateTime,
        dayOfWeek: res.data.dayOfTheWeek,
        timeZoneName: res.data.timeZoneName

      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <div className='worldClock'>{this.state.time} </div>
        <div>Day: {this.state.dayOfWeek}</div>
        <div>Time Zone: {this.state.timeZoneName}</div>
      </div>
    );
  }
}

export default WorldClock;
