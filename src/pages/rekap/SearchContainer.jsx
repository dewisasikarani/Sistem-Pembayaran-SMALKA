import {
  Input,
  Stack,
  Button,
  InputGroup,
  useColorModeValue,
  InputRightAddon,
  HStack,
  Text,
  Select,
} from "@chakra-ui/react";

const SearchContainer = ({ ...otherProps }) => (
  <Stack
    bg={useColorModeValue("white", "gray.800")}
    w="100%"
    p="4"
    rounded="xl"
    {...otherProps}
  >
    <Stack direction={{ base: "column", lg: "row" }} spacing="4">
      <HStack>
        <Text>Pembayaran:</Text>
        <Select w="fit-content">
          <option value="option1">SPP</option>
          <option value="option2">Uang Makan</option>
          <option value="option3">Ekstrakulikuler</option>
          <option value="option1">Pengembangan</option>
          <option value="option2">PTS Semester 1</option>
          <option value="option3">PAS Semester 1</option>
          <option value="option1">Buku Pegangan</option>
          <option value="option2">Buku ISMUBA</option>
          <option value="option3">Tahfidz Camp</option>
          <option value="option1">PTS Semester 2</option>
          <option value="option2">PAT Semester 2</option>
          <option value="option3">Kalender</option>
          <option value="option1">Kenaikan Tingkat</option>
          <option value="option2">Parenting</option>
          <option value="option3">Pembayaran Idul Adha</option>
        </Select>
      </HStack>
      <HStack>
        <Text>Menampilkan Tanggal:</Text>
        <Input type="date" w="fit-content" />
      </HStack>
      <HStack>
        <Text>Kelas:</Text>
        <Select w="fit-content">
          <option value="option1">Kelas 1</option>
          <option value="option2">Kelas 2</option>
          <option value="option3">Kelas 3</option>
        </Select>
      </HStack>
    </Stack>
    <Stack direction={{ base: "column", lg: "row" }} spacing="4">
      <Stack as="form" w="full">
        <InputGroup>
          <Input type="text" placeholder="Cari berdasarkan nama siswa" />
          <InputRightAddon px="0">
            <Button colorScheme={"green"} px="8" roundedLeft={0}>
              Cari
            </Button>
          </InputRightAddon>
        </InputGroup>
      </Stack>
      <Stack as="form" w="full">
        <InputGroup>
          <Input type="text" placeholder="Cari berdasarkan nisn" />
          <InputRightAddon px="0">
            <Button colorScheme={"green"} px="8" roundedLeft={0}>
              Cari
            </Button>
          </InputRightAddon>
        </InputGroup>
      </Stack>
    </Stack>
  </Stack>
);

export default SearchContainer;
