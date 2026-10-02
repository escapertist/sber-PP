import type { CSSProperties, ReactNode } from 'react'
import { cx } from '../../../utils/cx'
import styles from './Columns.module.scss'

export interface ColumnsProps {
  /** Column widths from the Figma layout in px; used as proportions, e.g. [720, 394]. */
  widths: ReadonlyArray<number>
  /** Stretch columns to equal height instead of aligning them to the top. */
  stretch?: boolean
  gap?: 'sm' | 'md' | 'lg'
  /** Fixed height in px for every column on wide screens, e.g. a row of chart panels. */
  rowHeight?: number
  className?: string
  children: ReactNode
}

/** Responsive grid row that keeps Figma column proportions and stacks on small screens. */
export function Columns({
  widths,
  stretch = false,
  gap = 'lg',
  rowHeight,
  className,
  children,
}: ColumnsProps) {
  const template = widths.map((width) => `minmax(0, ${width}fr)`).join(' ')

  return (
    <div
      className={cx(
        styles.root,
        styles[`gap-${gap}`],
        stretch && styles.stretch,
        rowHeight !== undefined && styles.fixedHeight,
        className,
      )}
      style={
        {
          '--columns-template': template,
          '--columns-row-height': rowHeight ? `${rowHeight}px` : undefined,
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}
