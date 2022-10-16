import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <Box pt="2vh">
      <Navbar />
      <Box as="main">
        <Outlet />
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default Layout;
