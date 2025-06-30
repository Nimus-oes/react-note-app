import { useIsMobile } from "../hooks/use-is-mobile";
import SubLayout from "../layout/sub-layout";

export default function TagListPage() {
  const isMobile = useIsMobile();
  const tagList = isMobile ? <h1>Tag List</h1> : <h2>Select a tag</h2>;

  return (
    <div>
      <SubLayout subOptions={tagList} />
    </div>
  );
}
