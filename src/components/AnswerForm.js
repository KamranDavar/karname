import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { useParams } from "react-router-dom";

export default function AnswerForm() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("values", values);
  };


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h2>Submit your answer</h2>
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row className="question-form" justify="center">
          <Col xs={18} md={20} lg={22}>
            <Form.Item name="question">
              <Input placeholder="type question" />
            </Form.Item>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
