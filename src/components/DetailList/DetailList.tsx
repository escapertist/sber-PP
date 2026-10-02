import type { ReactNode } from 'react'
import { IconTile } from '../ui'
import styles from './DetailList.module.scss'

export interface DetailListItem {
  id: string
  /** Icon asset URL (15×15). */
  icon: string
  label: string
  value: ReactNode
}

export interface DetailListProps {
  items: ReadonlyArray<DetailListItem>
}

/** Icon + uppercase label + value rows for entity metadata. */
export function DetailList({ items }: DetailListProps) {
  return (
    <dl className={styles.root}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <IconTile icon={item.icon} iconSize={15} size="sm" tone="neutral" />
          <div className={styles.copy}>
            <dt className={styles.label}>{item.label}</dt>
            <dd className={styles.value}>{item.value}</dd>
          </div>
        </div>
      ))}
    </dl>
  )
}
