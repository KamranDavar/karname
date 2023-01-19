import { Avatar, Button, List } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function AnswerListItem({item}) {
  return (
    <div>
      <List.Item
        actions={[
          <Link to={`/${item.id}`} key="list-loadmore-more">
            <Button>like</Button>
            <Button>dislike</Button>
          </Link>,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.image} />}
          title={item.title}
          description={item.desc}
        />
      </List.Item>
    </div>
  );
}
