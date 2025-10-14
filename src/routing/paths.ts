export const Paths = {
  MainPage: "/",
} as const;

export const MainPageAnchors = {
  Hero: `${Paths.MainPage}#hero`,
  Projects: `${Paths.MainPage}#projects`,
  About: `${Paths.MainPage}#about`,
  Contact: `${Paths.MainPage}#contact`,
} as const;
