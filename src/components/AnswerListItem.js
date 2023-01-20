import { Avatar, Button, Card, Divider, Row, Space } from "antd";
import React from "react";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import { useGetUserById } from "../hooks/getUser";
import {
  useDislikeAnswerMutation,
  useLikeAnswerMutation,
} from "../store/services/jsonServerApi";

export default function AnswerListItem({ item, users }) {
  const user = useGetUserById(item.userId, users);
  const [likeAnswer, { isLoading: isLikeLoading }] = useLikeAnswerMutation();
  const [dislikeAnswer, { isLoading: isDislikeLoading }] =
    useDislikeAnswerMutation();

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
          <>
            <Space className="time-date">
              <span>
                ساعت:
                <b>{new Date(item.createdAt).toLocaleTimeString("fa-IR")}</b>
              </span>
              <Divider type="vertical" />
              <span>
                تاریخ:
                <b>
                  {" "}
                  {new Date(item.createdAt).toLocaleDateString("fa-IR")}
                </b>{" "}
              </span>
            </Space>
            <Space>
              <div>
                <SmileOutlined /> {item.likes}
              </div>
              <div>
                <FrownOutlined /> {item.dislikes}
              </div>
            </Space>
          </>
        }
      >
        {item?.body}
        <Row justify="end" className="width-100">
          <Space>
            <Button onClick={onLikeClick} loading={isLikeLoading}>
              <SmileOutlined /> پاسخ خوب بود
            </Button>
            <Button onClick={onDislikeClick} loading={isDislikeLoading} danger>
              <FrownOutlined /> پاسخ خوب نبود
            </Button>
          </Space>
        </Row>
      </Card>
    </div>
  );
}
