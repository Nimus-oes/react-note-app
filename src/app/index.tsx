import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import App from "./app";
import NoteListPage from "../pages/note-list-page";
import NoteDetailPage from "../pages/note-detail-page";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: () => redirect("/notes/all"),
      },
      {
        path: "notes",
        children: [
          {
            path: "all",
            Component: NoteListPage,
            children: [
              {
                path: ":noteId",
                Component: NoteDetailPage,
              },
            ],
          },
          {
            path: "archived",
            Component: NoteListPage,
            children: [
              {
                path: ":noteId",
                Component: NoteDetailPage,
              },
            ],
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
