import { Avatar, Button, Card, List, Row, Space } from "antd";
import React from "react";
import {
  SmileOutlined,
  FrownOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";

export default function AnswerListItem({ item, users }) {
  const user = users?.find((user) => user.id === item.userId);
  return (
    <div>
      <Card
        type="inner"
        title={
          <>
            <Avatar shape="square" src={item?.image} /> {user?.name}
          </>
        }
        extra={
          <Space>
            time: {new Date(item.createdAt).toLocaleTimeString("en-US")} | time:{" "}
            {new Date(item.createdAt).toLocaleDateString("en-US")}
            <div>
              <SmileOutlined /> {item.likes}
            </div>
            <div>
              <FrownOutlined /> {item.dislikes}
            </div>
          </Space>
        }
      >
        {item?.body}
        <Row justify="end" className="width-100">
          <Space>
            <Button>
              <LikeOutlined />
            </Button>
            <Button>
              <DislikeOutlined />
            </Button>
          </Space>
        </Row>
      </Card>
    </div>
  );
}
