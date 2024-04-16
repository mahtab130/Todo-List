interface IMainContext {
  theme: TTheme;
  language: TLanguage;
  changeTheme: (theme: TTheme) => void;
  changeLanguage: (lng: TLanguage) => void;
}
