import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Stack,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";

const TambahTransaksi = ({ ...otherProps }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      w="100%"
      p="4"
      rounded="xl"
      {...otherProps}
    >
      <Heading size={"md"}>Tambahkan Transaksi</Heading>
      <Stack as="form" spacing={4} mt="4">
        <FormControl>
          <FormLabel>Nama Siswa:</FormLabel>
          <Select placeholder="Pilih Nama Siswa">
            <option value="option1">Dewi</option>
            <option value="option2">Sasika</option>
            <option value="option3">Rani</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Jenis Pembayaran:</FormLabel>
          <Select placeholder="Pilih Jenis Pembayaran">
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
        </FormControl>
        <FormControl>
          <FormLabel>Tanggal Pembayaran:</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>Jumlah Pembayaran:</FormLabel>
          <Input placeholder="Masukkan Jumlah Pembayaran" />
        </FormControl>
      </Stack>
      <Button colorScheme="yellow" rounded="md" mt="4">
        Tambah
      </Button>
    </Box>
  );
};

export default TambahTransaksi;
