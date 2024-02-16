import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root";
import { Provider } from "react-redux";
import { Store } from "./store";
import './style.scss';

export const App = () => {
  return <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
}
