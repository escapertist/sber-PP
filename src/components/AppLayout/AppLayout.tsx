import type { ReactNode } from 'react'
import type { UserRole } from '../../mocks/auth'
import { Sidebar } from './Sidebar/Sidebar'
import { TopBar } from './TopBar/TopBar'
import styles from './AppLayout.module.scss'

export interface AppLayoutProps {
  role: UserRole
  /** Id of the active navigation item. */
  activeNavigationId: string
  children: ReactNode
}

export function AppLayout({ role, activeNavigationId, children }: AppLayoutProps) {
  return (
    <div className={styles.root}>
      <Sidebar role={role} activeNavigationId={activeNavigationId} />
      <div className={styles.workspace}>
        <TopBar role={role} />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  )
}
