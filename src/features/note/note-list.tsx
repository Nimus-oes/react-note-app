import { useQuery } from "@tanstack/react-query";
import type { NoteResponse } from "../../types";
import { fetchData } from "../../utils/api";
import { NavLink } from "react-router";
import styles from "./note-list.module.css";

export default function NoteList() {
  const { data, isLoading } = useQuery<NoteResponse>({
    queryKey: ["note"],
    queryFn: () => fetchData<NoteResponse>("/data/notes.json"),
  });

  if (isLoading) {
    return <div>Fetching notes..</div>;
  }

  const noteList = data?.notes.map((note) => (
    <NavLink to="" key={note.noteId}>
      {note.title}
    </NavLink>
  ));

  return <div className={styles.container}>{noteList}</div>;
}
