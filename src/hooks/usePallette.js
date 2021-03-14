import { useTheme } from "@chakra-ui/react";

function usePalette() {
  const theme = useTheme();
  return theme.colors.palette;
}

export default usePalette;
