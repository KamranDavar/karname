import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import "./styles/index.scss";
import { MainLayout } from "./layout";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;