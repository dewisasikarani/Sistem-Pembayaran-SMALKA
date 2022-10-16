import { Box } from "@chakra-ui/react";

const SectionContainer = ({ children, ...props }) => {
  return (
    <Box
      pt="8"
      pb={{ base: 0, lg: 8 }}
      px={{ base: 3, md: 6, lg: 10 }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default SectionContainer;
