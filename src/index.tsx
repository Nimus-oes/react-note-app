import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import NotFound from "./pages/NotFound.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import NoteList from "./pages/NoteList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: NoteList,
      },
      {
        path: "all",
        Component: NoteList,
      },
      {
        path: "archived",
        Component: NoteList,
      },
      {
        path: ":tag",
        Component: NoteList,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
