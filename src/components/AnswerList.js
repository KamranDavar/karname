import { List } from 'antd'
import React from 'react'
import { useGetUsersQuery } from '../store/services/jsonServerApi'
import {AnswerListItem} from './index'

export function AnswerList({items}) {
const {data:users}= useGetUsersQuery()

  return (
    <div><List
    header={<h2>پاسخ ها</h2>}
    itemLayout="horizontal"
    dataSource={items}
    renderItem={(item) => <AnswerListItem item={item} users={users} />}
  /></div>
  )
}
