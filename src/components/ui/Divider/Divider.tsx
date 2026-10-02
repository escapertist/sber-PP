import type { ReactNode } from 'react'
import { cx } from '../../../utils/cx'
import styles from './Divider.module.scss'

export interface DividerProps {
  /** Optional text shown in the middle of the line. */
  children?: ReactNode
  className?: string
}

export function Divider({ children, className }: DividerProps) {
  if (!children) {
    return <hr className={cx(styles.line, className)} />
  }

  return (
    <div role="separator" className={cx(styles.root, className)}>
      <span className={styles.line} />
      <span className={styles.label}>{children}</span>
      <span className={styles.line} />
    </div>
  )
}
