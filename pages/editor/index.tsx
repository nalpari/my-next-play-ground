import { useEffect, useState } from 'react'
import { Box, Title } from '@mantine/core'
import Editor from '@/components/Editor'

export default function Index() {
  const [content, setContent] = useState(`test`)

  const handleSubmit = (cont: string) => {
    console.log('🚀 ~ file: index.tsx:7 ~ Index ~ cont:', cont)
  }

  useEffect(() => {
    console.log(content)
  }, [content])

  return (
    <>
      <Box p={`xl`}>
        <Title order={1}>Editor component</Title>
      </Box>
      <Box px={`xl`}>
        <Editor
          content={content}
          onContent={setContent}
          onProcess={handleSubmit}
        />
      </Box>
    </>
  )
}
