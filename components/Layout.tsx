import type { LayoutRouteProps } from 'react-router-dom'
import { Box } from '@mantine/core'
import { NavbarSimple } from './NavbarSimple'

export default function Layout({ children }: LayoutRouteProps) {
  return (
    <>
      <Box display={`flex`}>
        <NavbarSimple />
        <main style={{ width: `100vw` }}>{children}</main>
      </Box>
    </>
  )
}
