import { FC, ProviderProps, createContext, useCallback, useState } from "react";

import {
  DEFAULT_THEME,
  DEFAULT_LANGUAGE,
} from "../../helpers/constants/statics";

export const MainContext = createContext<IMainContext>({
  theme: DEFAULT_THEME,
  language: DEFAULT_LANGUAGE,
  changeTheme: () => undefined,
  changeLanguage: () => undefined,
});

export const MainContextProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<TTheme>(DEFAULT_THEME);
  const [language, setLanguage] = useState<TLanguage>(DEFAULT_LANGUAGE);

  const changeTheme = useCallback((theme: TTheme) => {
    setTheme(theme);
  }, []);

  const changeLanguage = useCallback((lng: TLanguage) => {
    setLanguage(lng);
  }, []);

  const value: ProviderProps<IMainContext>["value"] = {
    theme,
    language,
    changeTheme,
    changeLanguage,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
