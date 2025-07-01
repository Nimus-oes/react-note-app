import NoteList from "../features/note/note-list";
import { useIsMobile } from "../hooks/use-is-mobile";
import SubLayout from "../layout/sub-layout";

export default function NoteListPage() {
  const isMobile = useIsMobile();

  const mobileLayout = (
    <>
      <NoteList />
      <div>+</div>
    </>
  );

  const desktopLayout = (
    <>
      <div>Create New Note</div>
      <NoteList />
    </>
  );

  const noteList = isMobile ? mobileLayout : desktopLayout;

  return (
    <>
      <SubLayout subOptions={noteList} />
    </>
  );
}
