import { List } from 'antd'
import React from 'react'
import AnswerListItem from './AnswerListItem'

export default function AnswerList({items}) {
  return (
    <div><List
    header={<h2>Answers</h2>}
    itemLayout="horizontal"
    dataSource={items}
    renderItem={(item) => <AnswerListItem item={item} />}
  /></div>
  )
}
