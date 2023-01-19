import { Layout } from "antd";
import { AppContent, AppHeader } from "../components";
import { AppRouter } from "../router";

export function MainLayout() {
  return (
    <div className="layout-container">
      <Layout>
        <AppHeader />
        <AppContent>
          <AppRouter />
        </AppContent>
      </Layout>
    </div>
  );
}
