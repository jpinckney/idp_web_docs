import React from 'react'
import CategoryFind from './FindDocs/CategoryFind'
import TopicFind from './FindDocs/TopicFind'
import SubtopicFind from './FindDocs/SubtopicFind'

export default function ConditionalRenderingComponents(props) {

  console.log(11111111111, props)
  const { category, topic, subtopic } = props.match.params

  if (category && topic && subtopic) {
    return (
      <SubtopicFind />
    )
  } else if (category && topic) {
    return (
      <TopicFind />
    )
  } else {
    return <CategoryFind />
  }
}