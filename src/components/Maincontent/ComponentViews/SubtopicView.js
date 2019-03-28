import React, { Component } from 'react'


export default class SubtopicView extends Component {


  render() {
    const { subtopic } = this.props
    return (
      <div className='subtopicView'>

        { subtopic.subtopic }
        <br />
        <strong>1 sentence description of the subtopic</strong>
        { subtopic.subtopic_description }
        <br />
        <strong>Basic use case example</strong>
        { subtopic.example }
        <br />
        { subtopic.syntax }
        <br />
        { subtopic.syntax_explaination }
        <br />
        <strong>In depth subtopic description</strong>
        {subtopic.subtopic_description}
        <br />
        <strong> this one should be additional examples from the same example column on the subtopic table</strong>
        { subtopic.example }


      </div>
    )
  }
}