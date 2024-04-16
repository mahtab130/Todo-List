type TValuesThemes = {
  [themeVariant in TTheme]: TAny;
};
export const handleChangeTheme = (
  theme: TTheme,
  themeValues: TValuesThemes
) => {
  return themeValues[theme];
};
