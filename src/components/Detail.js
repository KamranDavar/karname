import { Avatar, Card } from "antd";
import React from "react";
import { useGetUserById } from "../hooks/getUser";

export default function Detail({data, users}) {
  const user = useGetUserById(data?.userId, users);

  return (
    <div>
      <Card type="inner"
      title={<><Avatar shape="square" src={user?.avatar} /> {data?.title}</>} extra={<a href="#">More</a>}>
        {data?.description}
      </Card>
    </div>
  );
}
