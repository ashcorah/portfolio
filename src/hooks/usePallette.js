import { useTheme } from "@chakra-ui/react";

function usePalette(variant) {
  const theme = useTheme();
  if (variant === "greys") return theme.colors.palette.greys;
  return theme.colors.palette;
}

export default usePalette;
