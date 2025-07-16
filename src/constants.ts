export const ROUTES = {
  home: () => "/",
  all_notes_list: () => "/notes/all",
  all_notes_content: (noteId: string) => `/notes/all/${noteId}`,
  archived_notes_list: () => "/notes/archived",
  archived_notes_content: (noteId: string) => `/notes/archived/${noteId}`,
  tags_list: (tagId: string) => `/tags/${tagId}`,
  tags_content: (tagId: string, noteId: string) => `/tags/${tagId}/${noteId}`,
  search: (q: string) => `/search?q=${encodeURIComponent(q)}`,
  settings: () => "/settings",
};

export const ICONS = {
  home: "🏠",
  archived: "📥",
  tag: "🔖",
  search: "🔍",
  settings: "⚙️",
  delete: "🗑️",
  lightTheme: "☀️",
  darkTheme: "🌙",
  systemTheme: "⛅️",
  fontTheme: "T",
  sansSerif: "𝖲𝖲",
  serif: "𝗌",
  monospace: "𝙼𝚘𝚗𝚘",
  time: "🕓",
};
