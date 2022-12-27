import { Select } from "@chakra-ui/react";
import { useThemeContext, useThemeName } from "./themeContext";
import usePalette from "../../hooks/usePallette";

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
      <option value="lightTheme">Light</option>
      <option value="darkTheme">Dark</option>
    </Select>
  );
};

export default ThemeSelector;
