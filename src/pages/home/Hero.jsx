import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Hide,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import hero from "../../assets/img/hero.svg";

export default function Hero() {
  return (
    <Box ps={{ base: 4, md: 6, lg: 10 }} pe={{ base: 4, md: 6, lg: 0 }}>
      <Stack
        pt={{ base: 3, md: 10, lg: 0 }}
        pb={{ base: 3, md: 24, lg: 0 }}
        minH={{ base: "84vh", lg: "82vh" }}
        alignItems={"center"}
        direction={{ base: "column", lg: "row" }}
        spacing="4"
      >
        <Stack flex={1} spacing={"4"}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            Selamat Datang
            <Hide below="lg">
              <br />
            </Hide>{" "}
            Di Sistem Pembayaran
          </Heading>
          <Heading fontSize={{ base: "lg", md: "3xl", xl: "2xl" }}>
            SMA Muhammadiyah Al-Kautsar PK Kartasura
          </Heading>
          <Text color={"gray.500"}>
            Akses dan cari tahu informasi sistem pembayaran seluruh siswa di SMA
            Muhammadiyah Al - Kautsar PK Kartasura
          </Text>
          <Stack
            spacing={{ base: 4, sm: 4 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              as={Link}
              to="/masuk"
              rounded={"full"}
              size={"md"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"yellow"}
            >
              Masuk
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1} justify={"center"} w={"full"}>
          <Box
            height={{ base: "400px", lg: "500px" }}
            width={"full"}
            overflow={"hidden"}
            rounded={{ base: "2xl", lg: "none" }}
            roundedBottomStart={{ lg: "75px" }}
          >
            <Image
              alt={""}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={hero}
            />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}
