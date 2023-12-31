// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
//import './globals.css'
//import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
//
//const inter = Inter({ subsets: ['latin'] })
//
//export const metadata: Metadata = {
//  title: 'Create Next App',
//  description: 'Generated by create next app',
//}
//
//export default function RootLayout({
//  children,
//}: {
//  children: React.ReactNode
//}) {
//  return (
//    <html lang="en">
//      <body className={inter.className}>{children}</body>
//    </html>
//  )
//}
