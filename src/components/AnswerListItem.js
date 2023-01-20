import { Avatar, Button, Card, Row, Space } from "antd";
import React from "react";
import {
  SmileOutlined,
  FrownOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import { useGetUserById } from "../hooks/getUser";
import {
  useDislikeAnswerMutation,
  useLikeAnswerMutation,
} from "../store/services/jsonServerApi";

export default function AnswerListItem({ item, users }) {
  const user = useGetUserById(item.userId, users);
  const [likeAnswer, { isLoading: isLikeLoading, isSuccess: isLikeSuccess }] =
    useLikeAnswerMutation();
  const [
    dislikeAnswer,
    { isLoading: isDislikeLoading, isSuccess: isDislikeSuccess },
  ] = useDislikeAnswerMutation();

  const onLikeClick = () => {
    likeAnswer({ likes: item.likes + 1, id: item.id });
  };
  const onDislikeClick = () => {
    dislikeAnswer({ dislikes: item.dislikes + 1, id: item.id });
  };

  return (
    <div>
      <Card
        type="inner"
        title={
          <>
            <Avatar shape="square" src={user?.avatar} /> {user?.name}
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
            <Button onClick={onLikeClick} loading={isLikeLoading}>
              <LikeOutlined />
            </Button>
            <Button onClick={onDislikeClick} loading={isDislikeLoading}>
              <DislikeOutlined />
            </Button>
          </Space>
        </Row>
      </Card>
    </div>
  );
}
