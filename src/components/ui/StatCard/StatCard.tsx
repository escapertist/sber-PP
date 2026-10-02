import type { ReactNode } from 'react'
import { Panel } from '../Panel/Panel'
import styles from './StatCard.module.scss'

export interface StatCardProps {
  value: ReactNode
  label: ReactNode
  /** Icon asset URL (16×16) shown in the top right corner. */
  icon?: string
}

/** Compact metric: big number, optional icon and a caption below. */
export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <Panel padding="sm" gap="none" className={styles.root}>
      <div className={styles.top}>
        <span className={styles.value}>{value}</span>
        {icon && <img src={icon} width={16} height={16} alt="" />}
      </div>
      <span className={styles.label}>{label}</span>
    </Panel>
  )
}
