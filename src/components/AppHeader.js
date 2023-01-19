import { Col, Layout, Row, theme } from "antd";

const { Header } = Layout;

export function AppHeader() {
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
        <Col xs={12} className="title">Page Title</Col>
        <Col xs={12} className="account">account</Col>
      </Row>
    </Header>
  );
}
