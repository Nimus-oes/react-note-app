import TagList from "../features/tag/tag-list";
import { useIsMobile } from "../hooks/use-is-mobile";
import SubLayout from "../layout/sub-layout";

export default function TagListPage() {
  const isMobile = useIsMobile();
  const tagList = isMobile ? <TagList /> : <h2>Select a tag</h2>;

  return (
    <div>
      <SubLayout subOptions={tagList} />
    </div>
  );
}
