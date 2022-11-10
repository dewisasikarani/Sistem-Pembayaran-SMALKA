import LayoutContainer from "../../components/LayoutContainer";
import {
  Box,
  Flex,
  Heading,
  Stack,
  StackDivider,
  useColorModeValue,
  Link,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import Seo from "../../components/SEO";
import TambahTransaksi from "./TambahTransaksi";
import Rincian from "./Rincian";
import { IoHome, IoList } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";

const Dashboard = () => {
  const DrawerItem = ({ children, to, icon }) => (
    <Link as={RouteLink} to={to}>
      <HStack>
        <Icon as={icon}></Icon>
        <Text>{children}</Text>
      </HStack>
    </Link>
  );

  return (
    <>
      <Seo title="Dashboard" />
      <LayoutContainer bg={useColorModeValue("pink.100", "pink.900")} px="0">
        <Flex
          minH={{ base: "84vh", lg: "82vh" }}
          w="full"
          py="1px"
          direction={"column"}
        >
          <HStack
            minH="100%"
            bg={useColorModeValue("white", "gray.800")}
            p="4"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.700")}
              />
            }
          >
            <DrawerItem to="/dashboard" icon={IoHome}>
              Dashboard
            </DrawerItem>
            <DrawerItem to="/rekap" icon={IoList}>
              Rekap
            </DrawerItem>
            <DrawerItem to="/setelan" icon={GiSettingsKnobs}>
              Setelan
            </DrawerItem>
          </HStack>
          <Box minH="100%" w="100%" p="4">
            <Heading>Selamat Datang</Heading>
            <TambahTransaksi mt="2" />
            <Rincian mt="4" />
          </Box>
        </Flex>
      </LayoutContainer>
    </>
  );
};

export default Dashboard;
