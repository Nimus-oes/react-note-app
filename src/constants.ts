const ROUTES = {
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
};

export const NAV_OPTIONS = {
  home: { icon: "🏡", i18nKey: "home", route: ROUTES.NOTES.ALL.LIST },
  archived: {
    icon: "📥",
    i18nKey: "archived",
    route: ROUTES.NOTES.ARCHIVED.LIST,
  },
  search: { icon: "🔍", i18nKey: "search", route: ROUTES.NOTES.SEARCH },
  tags: { icon: "🔖", i18nKey: "tags", route: ROUTES.TAGS.LIST },
  settings: { icon: "⚙️", i18nKey: "settings", route: ROUTES.SETTINGS },
} as const;
