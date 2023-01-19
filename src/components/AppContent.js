import { Layout } from "antd";

const { Content } = Layout;

export function AppContent({ children }) {
  return <Content className="content">{children}</Content>;
}
