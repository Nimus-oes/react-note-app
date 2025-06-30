import { createBrowserRouter } from "react-router";
import App from "../app/app";
import NoteTagListPage from "../pages/note-tag-list-page";
import NoteContentPage from "../pages/note-content-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "notes",
        children: [
          {
            path: ":category",
            Component: NoteTagListPage,
            children: [{ path: ":noteId", Component: NoteContentPage }],
          },
        ],
      },
    ],
  },
]);
