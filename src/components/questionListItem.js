import { Avatar, Button, List } from "antd";
import { Link } from "react-router-dom";

export function QuestionListItem({ item }) {
  return (
    <>
      <List.Item
        actions={[
          <Link
            to={`/${item.id}`}
            key="list-loadmore-more"
          >
            <Button>Detail</Button>
          </Link>,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.image} />}
          title={<h3>{item.title}</h3>}
          description={item.desc}
        />
      </List.Item>
    </>
  );
}
