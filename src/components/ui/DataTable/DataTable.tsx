import type { CSSProperties, ReactNode } from 'react'
import { cx } from '../../../utils/cx'
import styles from './DataTable.module.scss'

export interface DataTableColumn<T> {
  key: string
  header: ReactNode
  /** Column width in px from the Figma layout; omit to let the column take the remaining space. */
  width?: number
  render: (row: T) => ReactNode
}

export interface DataTableProps<T> {
  columns: ReadonlyArray<DataTableColumn<T>>
  rows: ReadonlyArray<T>
  getRowKey: (row: T) => string
  /** Minimum row height in px. */
  rowHeight?: number
  isRowHighlighted?: (row: T) => boolean
  footer?: ReactNode
  'aria-label': string
  className?: string
}

export function DataTable<T>({
  columns,
  rows,
  getRowKey,
  rowHeight = 70,
  isRowHighlighted,
  footer,
  'aria-label': ariaLabel,
  className,
}: DataTableProps<T>) {
  return (
    <div className={cx(styles.root, className)}>
      <div className={styles.scroller}>
        <table
          className={styles.table}
          aria-label={ariaLabel}
          style={{ '--row-height': `${rowHeight}px` } as CSSProperties}
        >
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={styles.headerCell}
                  style={column.width ? { width: column.width } : undefined}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={getRowKey(row)}
                className={cx(styles.row, isRowHighlighted?.(row) && styles.highlighted)}
              >
                {columns.map((column) => (
                  <td key={column.key} className={styles.cell}>
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
}
