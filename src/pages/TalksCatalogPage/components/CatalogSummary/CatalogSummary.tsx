import { cx } from '../../../../utils/cx'
import styles from './CatalogSummary.module.scss'

export interface CatalogSummaryItem {
  id: string
  value: number
  label: string
  selected: boolean
}

export interface CatalogSummaryProps {
  items: ReadonlyArray<CatalogSummaryItem>
}

/** Counters that double as status tabs for the catalog. */
export function CatalogSummary({ items }: CatalogSummaryProps) {
  return (
    <div className={styles.root} role="group" aria-label="Статусы докладов">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          aria-pressed={item.selected}
          className={cx(styles.item, item.selected && styles.selected)}
        >
          <span className={styles.value}>{item.value}</span>
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </div>
  )
}
