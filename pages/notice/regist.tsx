import { useState } from 'react'
import { Box, Input, Title } from '@mantine/core'
import Editor from '@/components/Editor'
import axios from 'axios'

export default function Regist() {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleSubmit = async (cont: string) => {
    console.log('🚀 ~ file: index.tsx:7 ~ Index ~ title:', title)
    console.log('🚀 ~ file: index.tsx:7 ~ Index ~ content:', cont)
    const data = {
          title,
          content: cont,
        }
    const result = await axios.post('/api/add-notice', data)
    console.log(result)
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
