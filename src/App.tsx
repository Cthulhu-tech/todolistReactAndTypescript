import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root";

export const App = () => {
  return  <RouterProvider router={router} />
}
