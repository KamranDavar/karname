import { Avatar, Button, Card, Divider, Row, Space } from "antd";
import { Link } from "react-router-dom";
import { MessageOutlined } from "@ant-design/icons";
import { useGetUserById } from "../hooks/getUser";

export function QuestionListItem({ item, users }) {
  const user = useGetUserById(item.userId, users);
  return (
    <>
      <Card
        type="inner"
        title={
          <>
            <Avatar shape="square" src={user?.avatar} /> {item?.title}
          </>
        }
        extra={
          <>
            <Space className="time-date">
              <span>
                ساعت:
                <b>
                  {" "}
                  {new Date(item.createdAt).toLocaleTimeString("fa-IR")}
                </b>{" "}
              </span>
              <Divider type="vertical" />
              <span>
                تاریخ:{" "}
                <b> {new Date(item.createdAt).toLocaleDateString("fa-IR")}</b>{" "}
              </span>
            </Space>
            <MessageOutlined /> {item?.answers?.length}
          </>
        }
      >
        {item.description}
        <Row justify="end" className="width-100">
          <Link to={`/${item.id}`}>
            <Button>مشاهده جزییات</Button>
          </Link>
        </Row>
      </Card>
    </>
  );
}
