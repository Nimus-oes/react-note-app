import { useIsMobile } from "../hooks/use-is-mobile";
import SubLayout from "../layout/sub-layout";

export default function NoteListPage() {
  const isMobile = useIsMobile();

  const mobileLayout = (
    <>
      <h1>Note List</h1>
      <div>+</div>
    </>
  );

  const desktopLayout = (
    <>
      <div>Create New Note</div>
      <h1>Note List</h1>
    </>
  );

  const noteList = isMobile ? mobileLayout : desktopLayout;

  return (
    <>
      <SubLayout subOptions={noteList} />
    </>
  );
}
