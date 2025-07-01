import { createBrowserRouter } from "react-router";
import App from "../app/app";
import NoteListPage from "../pages/note-list-page";
import NoteContentPage from "../pages/note-content-page";
import TagListPage from "../pages/tag-list-page";
import Error404Page from "../pages/error-404-page";
import { validateCategory } from "./valid-route-loader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error404Page />,
    children: [
      {
        path: "notes",
        children: [
          {
            path: ":category",
            loader: validateCategory,
            Component: NoteListPage,
            children: [{ path: ":noteId", Component: NoteContentPage }],
          },
        ],
      },
      {
        path: "tags",
        Component: TagListPage,
      },
      {
        path: "tags/:tagId",
        Component: NoteListPage,
        children: [{ path: ":noteId", Component: NoteContentPage }],
      },
    ],
  },
  {
    path: "/error-404",
    Component: Error404Page,
  },
]);
