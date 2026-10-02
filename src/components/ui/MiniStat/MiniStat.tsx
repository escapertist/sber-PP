import type { ReactNode } from 'react'
import { cx } from '../../../utils/cx'
import styles from './MiniStat.module.scss'

export interface MiniStatProps {
  value: ReactNode
  label: ReactNode
  size?: 'md' | 'lg'
  highlighted?: boolean
}

/** Small tinted tile with a number and a caption, used inside panels. */
export function MiniStat({ value, label, size = 'md', highlighted = false }: MiniStatProps) {
  return (
    <div className={cx(styles.root, styles[size], highlighted && styles.highlighted)}>
      <dt className={styles.label}>{label}</dt>
      <dd className={styles.value}>{value}</dd>
    </div>
  )
}
