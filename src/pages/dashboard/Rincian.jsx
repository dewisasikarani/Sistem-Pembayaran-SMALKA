import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function StatsCard(props) {
  const { title, stat, icon, subLabel } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      bg={useColorModeValue("white", "gray.800")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"}>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
          <StatLabel fontWeight={"medium"}>
            {subLabel}
          </StatLabel>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics({ ...otherProps }) {
  return (
    <Box mx={"auto"} {...otherProps}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 5 }}>
        <StatsCard
          title={"Saldo Masuk"}
          stat={"Rp. 50.000.000"}
          icon={<BsPerson size={"3em"} />}
          subLabel={"Riwayat Terakhir: 22/11/2022"}
        />
        <StatsCard
          title={"Pembayaran Terbaru"}
          stat={"SPP"}
          icon={<FiServer size={"3em"} />}
          subLabel={"November 2022"}
        />
      </SimpleGrid>
    </Box>
  );
}
