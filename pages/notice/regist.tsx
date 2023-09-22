import { useState } from 'react'
import { Box, Input, Title } from '@mantine/core'
import Editor from '@/components/Editor'

export default function Regist() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (cont: string) => {
    console.log('🚀 ~ file: index.tsx:7 ~ Index ~ title:', title)
    console.log('🚀 ~ file: index.tsx:7 ~ Index ~ content:', cont)
  }

  return (
    <>
      <Box p={`xl`}>
        <Title order={1}>공지사항 등록</Title>
      </Box>
      <Box px={`xl`}>
        <Input.Wrapper
          label="제목"
          description="공지사항 제목"
          error=""
          py={`sm`}
        >
          <Input
            placeholder="제목을 입력해 주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input.Wrapper>
        <Title order={6}>내용</Title>
        <Editor
          content={content}
          onContent={setContent}
          onProcess={handleSubmit}
        />
      </Box>
    </>
  )
}
