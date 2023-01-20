import { Avatar, Button, Card, List, Row, Space } from "antd";
import { Link } from "react-router-dom";
import { MessageOutlined } from "@ant-design/icons";

export function QuestionListItem({ item }) {
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
            time:<b>17:00</b> | data: <b>01/01/2022</b> <MessageOutlined />3
          </Space>
        }
      >
        {item.desc}
        <Row justify="end" className="width-100">
          <Link to={`/${item.id}`}>
            <Button>Detail</Button>
          </Link>
        </Row>
      </Card>
    </>
  );
}
