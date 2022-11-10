import { Heading, Image, Stack, Link } from "@chakra-ui/react";
import LayoutContainer from "../../components/LayoutContainer";
import Seo from "../../components/SEO";
import notFoundImg from "../../assets/img/notfound.png";
import { Link as RouterLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Seo title="404" />
      <LayoutContainer spacing="4">
        <Image src={notFoundImg} alt="logo" boxSize="400px" />
        <Stack textAlign="center">
          <Heading fontSize={{ base: "lg", md: "3xl", xl: "2xl" }}>
            Halaman tidak ditemukan
          </Heading>
          <Link fontSize={{ base: "md", md: "2xl", xl: "xl" }} as={RouterLink} to="/">Kembali ke halaman utama</Link>
        </Stack>
      </LayoutContainer>
    </>
  );
};

export default NotFoundPage;
