import App from "./App";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <Provider store={store}>
  <App />
  // </Provider>
);
