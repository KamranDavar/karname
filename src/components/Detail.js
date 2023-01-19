import { Card } from "antd";
import React from "react";

export default function Detail({data}) {

  return (
    <div>
      <Card type="inner" title={data.title} extra={<a href="#">More</a>}>
        {data.desc}
      </Card>
    </div>
  );
}
