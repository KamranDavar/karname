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

  const { TextArea } = Input;

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
          <Col xs={24} >
            <Form.Item name="question">
              <TextArea rows={4} placeholder="type answer" />
            </Form.Item>
          </Col>
          <Row justify="end" className="width-100">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Row>
        </Row>
      </Form>
    </div>
  );
}
