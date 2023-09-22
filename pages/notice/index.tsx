import { useRouter } from 'next/router'
import { Box, Button, Table, Title } from '@mantine/core'
import dayjs from 'dayjs'

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
]

export default function Index() {
  const router = useRouter()

  const rows = elements.map((element, index) => (
    <Table.Tr key={element.name}>
      <Table.Td>{++index}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{dayjs().format('YYYY-MM-DD')}</Table.Td>
    </Table.Tr>
  ))

  const handleRegist = () => {
    router.push(`/notice/regist`)
  }

  return (
    <>
      <Box p={`xl`}>
        <Title order={1}>Notice</Title>
      </Box>
      <Box px={`xl`}>
        <Button variant={`filled`} onClick={handleRegist}>
          등록
        </Button>
      </Box>
      <Box px={`xl`}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>No</Table.Th>
              <Table.Th>Title</Table.Th>
              <Table.Th>Reg Date</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Box>
    </>
  )
}
