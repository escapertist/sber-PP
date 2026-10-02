import type { ReactNode } from 'react'
import { cx } from '../../../utils/cx'
import styles from './Callout.module.scss'

export interface CalloutProps {
  /** Icon asset URL (16×16). */
  icon: string
  tone?: 'info' | 'warning'
  action?: ReactNode
  className?: string
  children: ReactNode
}

/** Full-width tinted note with an icon and an optional action. */
export function Callout({ icon, tone = 'info', action, className, children }: CalloutProps) {
  return (
    <aside className={cx(styles.root, styles[tone], className)}>
      <img src={icon} width={16} height={16} alt="" />
      <p className={styles.text}>{children}</p>
      {action}
    </aside>
  )
}
