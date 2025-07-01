import { useQuery } from "@tanstack/react-query";
import type { TagResponse } from "../../types";
import { fetchData } from "../../utils/api";
import { NavLink } from "react-router";
import styles from "./tag-list.module.css";

export default function TagList() {
  const { data, isLoading } = useQuery<TagResponse>({
    queryKey: ["tag"],
    queryFn: () => fetchData<TagResponse>("/data/tags.json"),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isLoading) {
    return <div>Fetching tags..</div>;
  }

  const tagList = data?.tags?.map((tag) => (
    <NavLink to="" key={tag.tagId}>
      {tag.tagName}
    </NavLink>
  ));

  return <div className={styles.container}>{tagList}</div>;
}
