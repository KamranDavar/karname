import { Button, Col, Form, Input, Row } from "antd";
import { useEffect } from "react";
import { useGetUserById } from "../hooks/getUser";
import {
  useCreateQuestionMutation,
  useGetUsersQuery,
} from "../store/services/jsonServerApi";

export function QuestionForm({ closeModal }) {
  const [createQuestion, { isLoading, isSuccess }] =
    useCreateQuestionMutation();

  const [form] = Form.useForm();
  const { data: users } = useGetUsersQuery();
  const user = useGetUserById(1, users);
  const onFinish = (values) => {
    values.createdAt = Date.now();
    values.userId = user.id;
    createQuestion(values);
  };
  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      closeModal();
    }
  }, [isSuccess]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { TextArea } = Input;

  return (
    <>
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row className="question-form" justify="center">
          <Col xs={24}>
            <Form.Item name="title">
              <Input placeholder="عنوان سوال  را بنویسید" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item name="description">
              <TextArea rows={4} placeholder="متن سوال  را بنویسید" />
            </Form.Item>
          </Col>
          <Row justify="end" className="width-100">
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                ایجاد سوال
              </Button>
            </Form.Item>
          </Row>
        </Row>
      </Form>
    </>
  );
}
