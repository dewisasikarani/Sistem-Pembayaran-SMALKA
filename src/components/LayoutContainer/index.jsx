import { Stack } from "@chakra-ui/react";

const LayoutContainer = ({ children, ...props }) => {
  return (
    <Stack
      alignItems="center"
      justify="center"
      minH={{ base: "82vh", lg: "80vh" }}
      px={{ base: 3, md: 6, lg: 10 }}
      py="4"
      {...props}
    >
      {children}
    </Stack>
  );
};

export default LayoutContainer;
