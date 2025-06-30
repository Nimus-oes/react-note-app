import SubLayout from "../layout/sub-layout";

export default function NoteListPage() {
  const noteList = <h1>Note List</h1>;

  return (
    <>
      <SubLayout subOptions={noteList} />
    </>
  );
}
