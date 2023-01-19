import { Button, Col, Form, Input, Row } from "antd";

export function QuestionForm() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("values", values);
  };

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
            <Form.Item name="question">
              <Input placeholder="type title" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item name="desc">
              <TextArea rows={4} placeholder="type question" />
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
    </>
  );
}
