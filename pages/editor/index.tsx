import { useEffect, useState } from 'react'
import { Box, Title } from '@mantine/core'
import Editor from '@/components/Editor'

export default function Index() {
  const [content, setContent] = useState(`test`)

  useEffect(() => {
    console.log(content)
  }, [content])

  return (
    <>
      <Box p={`xl`}>
        <Title order={1}>Editor component</Title>
      </Box>
      <Box px={`xl`}>
        <Editor content={content} onContent={setContent} />
      </Box>
    </>
  )
}
