import { createBrowserRouter } from "react-router";
import App from "../app/app";
import NoteContentPage from "../pages/note-content-page";
import EmptyContentPage from "../pages/empty-content-page";
import IndexPanelPage from "../pages/index-panel-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        Component: IndexPanelPage,
        children: [
          {
            path: "notes/:category",
            Component: EmptyContentPage,
          },
          {
            path: "notes/:category/:noteId",
            Component: NoteContentPage,
          },
          {
            path: "tags",
            Component: EmptyContentPage,
          },
          {
            path: "tags/:tagId",
            Component: EmptyContentPage,
          },
          {
            path: "tags/:tagId/:noteId",
            Component: NoteContentPage,
          },
        ],
      },
    ],
  },
]);
