import {
  Box,
  chakra,
  Hide,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Logo = () => {
  return (
    <HStack>
      <Image
        src="https://smamalkautsarpk.sch.id/wp-content/uploads/2019/08/Logo-SMA-Al-Kautsar.png"
        alt="logo"
        boxSize="32px"
      />
      <Text fontWeight="bold" fontFamily="sans-serif">
        SMALKA
      </Text>
    </HStack>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack
        minH={"10vh"}
        py={4}
        px={{ base: 3, md: 6, lg: 10 }}
        direction={{ base: "column", lg: "row" }}
        spacing={4}
        justify={{ base: "center", lg: "space-between" }}
        align={"center"}
      >
        <Logo />
        <Text textAlign="center">
          © 2022 SMA Muhammadiyah Al-Kautsar Kartasura.
          <Hide above="xl">
            <br />
          </Hide>{" "}
          All rights reserved.
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Email"} href={"mailto:smampk.kts@gmail.com"}>
            <MdEmail />
          </SocialButton>
          <SocialButton
            label={"TikTok"}
            href={"https://tiktok.com/@smam_alkautsar"}
          >
            <FaTiktok />
          </SocialButton>
          <SocialButton
            label={"Facebook"}
            href={"https://web.facebook.com/alkautsar.sma"}
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={"YouTube"}
            href={"https://www.youtube.com/c/SMAMAlKautsarPK"}
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/smam.alkautsarpk"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Stack>
    </Box>
  );
}
