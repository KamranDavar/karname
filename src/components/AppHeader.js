import { PlusOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons/lib/icons";
import {
  Button,
  Col,
  Layout,
  Row,
  theme,
  Avatar,
  Dropdown,
  Space,
  Modal,
} from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { QuestionForm } from "./QuestionForm";

const { Header } = Layout;

export function AppHeader() {
  let { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      theme="light"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        background: colorBgContainer,
      }}
    >
      <Row>
        <Col flex="auto" className="title">
          <h1>{pathname === "/" ? "Question  List" : "Question De3tail"}</h1>
        </Col>
        <Col className="account">
          <Space>
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
              new question
            </Button>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Hover me
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Space>
        </Col>
      </Row>
      <Modal
        title="Create New Question"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <QuestionForm />
      </Modal>
    </Header>
  );
}

const items = [
  {
    key: "1",
    label: <div>profile</div>,
  },
  {
    key: "2",
    label: <div>activities</div>,
  },
  {
    key: "3",
    label: <div>log out</div>,
  },
];
