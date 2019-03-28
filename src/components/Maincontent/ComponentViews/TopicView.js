import React, { Component } from 'react'


export default class SubtopicView extends Component {


  render() {
    console.log( 'topic view props',this.props)
    const { topic } = this.props
    return (
      <div className='topicView'>
        
        {topic.topic}
       <br />
        { topic.topic_description }



      </div>
    )
  }
}