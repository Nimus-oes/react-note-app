import { createBrowserRouter } from "react-router";
import App from "../app/App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);
