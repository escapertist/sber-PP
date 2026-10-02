import type { ReactNode } from 'react'
import { cx } from '../../../utils/cx'
import styles from './Stack.module.scss'

export interface StackProps {
  className?: string
  children: ReactNode
}

/** Vertical column of panels with the standard workspace gap. */
export function Stack({ className, children }: StackProps) {
  return <div className={cx(styles.root, className)}>{children}</div>
}
