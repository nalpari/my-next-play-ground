import { useRouter } from 'next/router'
import { Box, Button, Title } from '@mantine/core'

export default function Main() {
  const router = useRouter()
  const handleMoveEditor = () => {
    router.push(`/editor`)
  }

  return (
    <>
      <Box p={`xl`}>
        <Title order={1}>Index</Title>
      </Box>
      <Box px={`xl`}>
        <Button variant={`filled`} onClick={handleMoveEditor}>
          Editor 이동
        </Button>
      </Box>
    </>
  )
}
