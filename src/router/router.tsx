import { createBrowserRouter } from "react-router";
import App from "../app/App";
import IndexPage from "../pages/index-page";
import ContentPage from "../pages/content-page";
import EmptyContentPage from "../pages/empty-content-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        Component: IndexPage,
        children: [
          { index: true, Component: EmptyContentPage },
          { path: "notes/all", Component: EmptyContentPage },
          { path: "notes/all/:noteId", Component: ContentPage },
          { path: "notes/archived", Component: EmptyContentPage },
          { path: "notes/archived/:noteId", Component: ContentPage },
          { path: "notes/tags", Component: EmptyContentPage },
          { path: "notes/tags/:tagId", Component: EmptyContentPage },
          { path: "notes/tags/:tagId/:noteId", Component: ContentPage },
          { path: "notes/tags/:settings", Component: EmptyContentPage },
        ],
      },
    ],
  },
]);
