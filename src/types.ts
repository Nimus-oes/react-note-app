import type { CATEGORY } from "./constants";

export type CategoryType = (typeof CATEGORY)[number];

export interface Note {
  noteId: string;
  title: string;
  createAt: string;
  lastModified: string;
  tags: string[];
  isArchived: boolean;
  content: string;
}

export interface Tag {
  tagId: string;
  tagName: string;
  items: Record<string, string>[];
}
