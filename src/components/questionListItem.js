import { Avatar, Button, Card, Row, Space } from "antd";
import { Link } from "react-router-dom";
import { MessageOutlined } from "@ant-design/icons";

export function QuestionListItem({ item }) {
  console.log("item", item)
  return (
    <>
      <Card
        type="inner"
        title={
          <>
            <Avatar shape="square" src={item.image} /> {item.title}
          </>
        }
        extra={
          <Space>
            time:<b> {new Date(item.createdAt).toLocaleTimeString("en-US")}</b>{" "}
            | data:{" "}
            <b> {new Date(item.createdAt).toLocaleDateString("en-US")}</b>{" "}
            <MessageOutlined /> {item?.answers?.length}
          </Space>
        }
      >
        {item.description}
        <Row justify="end" className="width-100">
          <Link to={`/${item.id}`}>
            <Button>Detail</Button>
          </Link>
        </Row>
      </Card>
    </>
  );
}
