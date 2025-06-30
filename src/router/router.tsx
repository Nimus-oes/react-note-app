import { createBrowserRouter } from "react-router";
import App from "../app/app";
import NoteListPage from "../pages/note-list-page";
import NoteContentPage from "../pages/note-content-page";
import TagListPage from "../pages/tag-list-page";

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
]);
