import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import "./styles/index.scss";
import { MainLayout } from "./layout";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConfigProvider } from 'antd';
import fa_IR from 'antd/locale/fr_FR';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <ConfigProvider theme={theme} locale={fa_IR} direction="rtl">

          <MainLayout />
        </ConfigProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

const theme={
  
    token: {
      colorPrimary: '#27AE60',
    },
  
}