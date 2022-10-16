import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Link,
  useColorModeValue,
  useDisclosure,
  HStack,
  Image,
  useColorMode,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Hide,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function WithSubnavigation() {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box pos="sticky" top="0" left="0" right="0" zIndex="3">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={{ base: "6vh", lg: "8vh" }}
        px={{ base: 3, md: 6, lg: 10 }}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Flex justify={{ base: "center", md: "start" }}>
          <HStack spacing="3" as={RouterLink} to="/">
            <Image
              src="https://smamalkautsarpk.sch.id/wp-content/uploads/2019/08/Logo-SMA-Al-Kautsar.png"
              alt="logo"
              boxSize="32px"
            />
            <Text fontWeight="bold" fontFamily="sans-serif">
              SMALKA
            </Text>
          </HStack>

          <HStack display={{ base: "none", lg: "flex" }} ml={10} spacing={4}>
            {useLocation().pathname === "/" ? (
              <>
                <DesktopNav data={ItemHome} />
                <DesktopNav data={ItemGlobal} />
              </>
            ) : (
              <DesktopNav data={ItemGlobal} />
            )}
          </HStack>
        </Flex>

        <HStack alignItems={"center"}>
          <Link
            as={RouterLink}
            to="/masuk"
            p={2}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
            display={{ base: "none", lg: "flex" }}
          >
            MASUK
          </Link>
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            variant={"ghost"}
            rounded={"full"}
          />
          <IconButton
            display={{ base: "flex", lg: "none" }}
            onClick={onToggle}
            icon={<HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </HStack>
      </Flex>

      <MobileNav isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

const DesktopNav = ({ data }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4} my="auto">
      {data.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            {...(navItem.href
              ? { as: "a", href: navItem.href, target: navItem.target }
              : {
                  as: ScrollLink,
                  to: navItem.to,
                  spy: true,
                  smooth: true,
                  offset: -50,
                  duration: 500,
                })}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <Hide above="lg">
      <Drawer onClose={onClose} isOpen={isOpen} size={{ base: "xs", md: "md" }}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <HStack spacing="3">
              <Image
                src="https://smamalkautsarpk.sch.id/wp-content/uploads/2019/08/Logo-SMA-Al-Kautsar.png"
                alt="logo"
                boxSize="32px"
              />
              <Text fontFamily={"heading"}>SMALKA</Text>
            </HStack>
          </DrawerHeader>
          <DrawerCloseButton top={4} right={4} />
          <DrawerBody>
            <Stack>
              {useLocation().pathname === "/" ? (
                <>
                  {ItemHome.map((navItem) => (
                    <MobileNavItem
                      key={navItem.label}
                      {...navItem}
                      onClose={onClose}
                    />
                  ))}
                  {ItemGlobal.map((navItem) => (
                    <MobileNavItem
                      key={navItem.label}
                      {...navItem}
                      onClose={onClose}
                    />
                  ))}
                </>
              ) : (
                <>
                  {ItemGlobal.map((navItem) => (
                    <MobileNavItem
                      key={navItem.label}
                      {...navItem}
                      onClose={onClose}
                    />
                  ))}
                </>
              )}
              <Button
                as={RouterLink}
                to="/masuk"
                display={{ base: "flex", lg: "none" }}
                fontSize={"sm"}
                fontWeight={400}
                variant={"solid"}
                colorScheme={"teal"}
                onClick={onClose}
              >
                MASUK
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Hide>
  );
};

const MobileNavItem = ({ label, to, href, onClose, target }) => {
  return (
    <Stack spacing={0}>
      <Flex
        py={2}
        {...(href
          ? { as: "a", href, target }
          : {
              as: ScrollLink,
              to,
              spy: true,
              smooth: true,
              offset: -50,
              duration: 500,
            })}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
        cursor="pointer"
        onClick={onClose}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const ItemHome = [];

const ItemGlobal = [
  {
    label: "Blog",
    subLabel: "Cari tahu agenda terbaru",
    href: "https://smamalkautsarpk.sch.id/",
    target: "_blank",
  },
  {
    label: "Tentang Website",
    subLabel: "Informasi tentang pembuatan website",
    href: "#",
  },
];
