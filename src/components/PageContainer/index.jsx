import { Box } from "@chakra-ui/react";
import useMobile from '../../hooks/useMobile';

const PageContainer = ({ children }) => {
  const isMobile = useMobile();

  return (
    <Box w="100%" h="100%" p={isMobile ? 0 : 4}>
      {children}
    </Box>
  );
};

export default PageContainer;
