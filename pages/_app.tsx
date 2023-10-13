import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { createTheme, MantineProvider } from '@mantine/core'
import Layout from '@/components/Layout'

import '@mantine/core/styles.css'

const theme = createTheme({
  /** Put your mantine theme override here */
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  // const [isLogin, setIsLogin] = useState(false)
  // useEffect(() => {
  //   if (!isLogin) {
  //     router.push('/login')
  //   }
  // }, [])

  return (
    <>
      <MantineProvider theme={theme}>
        {router.pathname !== '/login' ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </MantineProvider>
    </>
  )
}
