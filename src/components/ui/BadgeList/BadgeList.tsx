import { cx } from '../../../utils/cx'
import { Badge, type BadgeTone } from '../Badge/Badge'
import styles from './BadgeList.module.scss'

export interface BadgeListItem {
  id: string
  label: string
  tone?: BadgeTone
}

export interface BadgeListProps {
  items: ReadonlyArray<BadgeListItem>
  'aria-label': string
  className?: string
}

/** Wrapping row of badges, e.g. topics or status tags. */
export function BadgeList({ items, 'aria-label': ariaLabel, className }: BadgeListProps) {
  return (
    <ul className={cx(styles.root, className)} aria-label={ariaLabel}>
      {items.map((item) => (
        <li key={item.id}>
          <Badge tone={item.tone}>{item.label}</Badge>
        </li>
      ))}
    </ul>
  )
}
