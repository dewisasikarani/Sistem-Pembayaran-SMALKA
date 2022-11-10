import { Stack } from "@chakra-ui/react";

const LayoutContainer = ({ children, ...props }) => {
  return (
    <Stack
      alignItems="center"
      justify="center"
      minH={{ base: "84vh", lg: "82vh" }}
      px={{ base: 3, md: 6, lg: 10 }}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default LayoutContainer;
