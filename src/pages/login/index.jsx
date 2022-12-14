import {
  Box,
  Heading,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import LayoutContainer from "../../components/LayoutContainer";
import Seo from "../../components/SEO";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      swal("Error", "Email dan Password tidak boleh kosong", "error");
    } else if (email === "admin@gmail.com" && password === "admin") {
      swal({
        title: "Sukses",
        text: "Login Berhasil",
        icon: "success",
      }).then((ifOk) => {
        if (ifOk) {
          navigate("/dashboard");
        }
      });
    } else {
      swal("Error", "Email atau Password salah", "error");
    }
  };

  return (
    <>
      <Seo title="Masuk" />
      <LayoutContainer spacing={6}>
        <Stack align="center" spacing={2}>
          <Heading
            fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
            fontWeight="bold"
          >
            Masuk ke Akun
          </Heading>
          <Text>Masuk untuk mengakses seluruh fitur</Text>
        </Stack>
        <Box pos="relative" w="full" maxW={{ base: "full", md: "xl" }}>
          <Box
            pos="absolute"
            top="-2px"
            right="-2px"
            bottom="-2px"
            left="-2px"
            rounded="lg"
            bgGradient="linear(to-r, #48BB78,#ECC94B)"
          ></Box>
          <Stack
            as="form"
            pos="relative"
            spacing={4}
            p={6}
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            onSubmit={handleSubmit}
          >
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Masukkan email"
                rounded="md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Masukkan password"
                rounded="md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="yellow" rounded="md" w="100%" type="submit">
              Masuk
            </Button>
          </Stack>
        </Box>
      </LayoutContainer>
    </>
  );
};

export default Login;
