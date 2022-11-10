import {
  Box,
  Button,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

const TableData = ({ data, ...otherProps }) => (
  <Box bg={useColorModeValue("white", "gray.800")} p="4" {...otherProps}>
    <HStack>
      <Button colorScheme="blue" size="sm" rounded="0">Unduh Rekap</Button>
      <Button colorScheme="red" size="sm" rounded="0">Sunting Rekap</Button>
    </HStack>
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Nama</Th>
            <Th>Januari</Th>
            <Th>Februari</Th>
            <Th>Maret</Th>
            <Th>April</Th>
            <Th>Mei</Th>
            <Th>Juni</Th>
            <Th>Juli</Th>
            <Th>Agustus</Th>
            <Th>September</Th>
            <Th>Oktober</Th>
            <Th>November</Th>
            <Th>Desember</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from(Array(10).keys()).map((i, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>Dummy</Td>
              <Td>Lunas</Td>
              <Td>Lunas</Td>
              <Td>Belum Lunas</Td>
              <Td>Belum Lunas</Td>
              <Td>Belum Lunas</Td>
              <Td>Belum Lunas</Td>
              <Td>Belum Lunas</Td>
              <Td>Belum Lunas</Td>
              <Td>Belum Lunas</Td>
              <Td>Belum Lunas</Td>
              <Td>Belum Lunas</Td>
              <Td>Belum Lunas</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  </Box>
);

export default TableData;
