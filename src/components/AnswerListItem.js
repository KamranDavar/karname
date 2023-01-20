import { Avatar, Button, Card, List, Row, Space } from "antd";
import React from "react";
import {
  SmileOutlined,
  FrownOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";

export default function AnswerListItem({ item }) {
  return (
    <div>
      <Card
        type="inner"
        title={
          <>
            <Avatar shape="square" src={item.image} /> {item.title}
          </>
        }
        extra={
          <Space>
            time:17:00 | time: 01/01/2022
            <div>
              <SmileOutlined /> 10
            </div>
            <div>
              <FrownOutlined /> 5
            </div>
          </Space>
        }
      >
        {item.desc}
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
