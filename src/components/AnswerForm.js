import React, { useEffect } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { useParams } from "react-router-dom";
import { useCreateAnswerMutation } from "../store/services/jsonServerApi";
import { useGetUserById } from "../hooks/getUser";

export default function AnswerForm({ users }) {
  const [createAnswer, { isLoading, isSuccess }] = useCreateAnswerMutation();
  const { id } = useParams();
  const user = useGetUserById(1, users);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    values.createdAt = Date.now();
    values.userId = user.id;
    values.questionId = Number(id);
    values.likes = 0;
    values.dislikes = 0;
    createAnswer(values);
  };
  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
    }
  }, [isSuccess]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { TextArea } = Input;

  return (
    <div>
      <h2> پاسخ خود را ثبت کنید</h2>
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row className="question-form" justify="center">
          <Col xs={24}>
            <Form.Item name="body">
              <TextArea rows={4} placeholder="متن پاسخ" />
            </Form.Item>
          </Col>
          <Row justify="end" className="width-100">
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                ارسال پاسخ
              </Button>
            </Form.Item>
          </Row>
        </Row>
      </Form>
    </div>
  );
}
