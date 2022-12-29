import { Select } from "@chakra-ui/react";
import { useThemeContext, useThemeName } from "./themeContext";
import usePalette from "../../hooks/usePallette";
import themes from "./themes";

const ThemeSelector = () => {
  const [, setThemeContext] = useThemeContext();
  const themeName = useThemeName();
  const colors = usePalette();

  return (
    <Select
      variant="flushed"
      value={themeName}
      color={colors.select}
      onChange={(e) => setThemeContext({ type: e.target.value })}
    >
      {Object.keys(themes).map((themeName) => (
        <option key={themeName} value={themeName}>
          {themes[themeName].name || themeName}
        </option>
      ))}
    </Select>
  );
};

export default ThemeSelector;
