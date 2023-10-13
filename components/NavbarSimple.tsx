import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Code, Group } from '@mantine/core'
import {
  Icon2fa,
  IconBellRinging,
  IconBrandVscode,
  IconDatabaseImport,
  IconFingerprint,
  IconHomeMove,
  IconKey,
  IconLogout,
  IconNews,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
} from '@tabler/icons-react'
import { MantineLogo } from '@mantine/ds'
import classes from './NavbarSimple.module.css'

const data = [
  { link: '/', label: 'Home', icon: IconHomeMove },
  { link: '/editor', label: 'Editor', icon: IconBrandVscode },
  { link: '/notice', label: 'Notice', icon: IconNews },
  { link: '', label: 'Notifications', icon: IconBellRinging },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings },
]

export function NavbarSimple() {
  const router = useRouter()
  const [active, setActive] = useState('Home')

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
        router.push(item.link)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ))

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <MantineLogo size={28} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  )
}
