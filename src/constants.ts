export const ROUTES = {
  HOME: "/",
  NOTES: {
    ALL: {
      LIST: "/notes/all",
      SINGLE_NOTE: "/notes/all/:noteId",
    },
    ARCHIVED: {
      LIST: "/notes/archived",
      SINGLE_NOTE: "/notes/archived/:noteId",
    },
    SEARCH: "/notes/search",
  },
  TAGS: {
    LIST: "/tags",
    TAGGED_NOTES: {
      LIST: "/tags/:tagId",
      SINGLE_NOTE: "/tags/:tagId/:noteId",
    },
  },
  SETTINGS: "/settings",
} as const;
