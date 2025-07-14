export const ROUTES = {
  home: () => "",
  all_notes_list: () => "/notes/all",
  all_notes_content: (noteId: string) => `/notes/all/${noteId}`,
  archived_notes_list: () => "/notes/archived",
  archived_notes_content: (noteId: string) => `/notes/archived/${noteId}`,
  tags_content: (tagId: string) => `tags/${tagId}`,
  settings: () => "/settings",
};

export const NAV_OPTIONS = {
  all_notes: { id: "all_notes", icons: "🏠", route: ROUTES.all_notes_list },
  archived_notes: {
    id: "archived_notes",
    icons: "📥",
    route: ROUTES.archived_notes_list,
  },
  tags: { id: "tags", icons: "🔖", route: ROUTES.tags_content },
  search: { id: "seach", icons: "🔍", route: () => "" },
  settings: { id: "settings", icons: "⚙️", route: ROUTES.settings },
};
