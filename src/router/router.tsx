import { createBrowserRouter } from "react-router";
import App from "../app/app";
import Error404Page from "../pages/error-404-page";
import { validateCategory } from "./valid-route-loader";
import IndexLayout from "../layout/index-layout";
import ContentPanel from "../pages/content-panel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error404Page />,
    children: [
      {
        Component: IndexLayout,
        children: [
          {
            path: "notes/:category",
            loader: validateCategory,
            children: [{ path: ":noteId", Component: ContentPanel }],
          },
          {
            path: "tags",
          },
          {
            path: "tags/:tagId",
            children: [{ path: ":noteId", Component: ContentPanel }],
          },
        ],
      },
    ],
  },
  {
    path: "/error-404",
    Component: Error404Page,
  },
]);
