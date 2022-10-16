import { Heading, Image, Stack } from "@chakra-ui/react";
import LayoutContainer from "../../components/LayoutContainer";
import Seo from "../../components/SEO";

const NotFoundPage = () => {
  return (
    <>
      <Seo title="404" />
      <LayoutContainer spacing="4">
        <Image
          src="https://smamalkautsarpk.sch.id/wp-content/uploads/2019/08/Logo-SMA-Al-Kautsar.png"
          alt="logo"
          boxSize="300px"
        />
        <Heading fontSize={{ base: "lg", md: "3xl", xl: "2xl" }}>
          Halaman tidak ditemukan
        </Heading>
      </LayoutContainer>
    </>
  );
};

export default NotFoundPage;
