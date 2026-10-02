import { useId, type CSSProperties, type ReactNode } from 'react'
import { Panel, SectionHeader } from '../ui'
import { cx } from '../../utils/cx'
import styles from './BarChart.module.scss'

export interface BarChartDatum {
  id: string
  label: string
  value: number
  /** Highlighted bars use the strong brand color, e.g. the current streak. */
  highlighted: boolean
}

export interface BarChartProps {
  title: string
  description: string
  data: ReadonlyArray<BarChartDatum>
  /** Height of the tallest bar in px. */
  barMaxHeight: number
  /** Legend label shown next to a brand marker. */
  legend?: string
  /** Custom element in the header instead of the legend, e.g. a badge. */
  action?: ReactNode
  className?: string
}

const numberFormat = new Intl.NumberFormat('ru-RU')

/** Panel with a simple monthly bar chart. */
export function BarChart({
  title,
  description,
  data,
  barMaxHeight,
  legend,
  action,
  className,
}: BarChartProps) {
  const titleId = useId()
  const maxValue = Math.max(...data.map((datum) => datum.value))

  return (
    <Panel gap="lg" className={className} aria-labelledby={titleId}>
      <SectionHeader
        titleId={titleId}
        title={title}
        description={description}
        action={
          action ??
          (legend && (
            <span className={styles.legend}>
              <span className={styles.legendMarker} aria-hidden="true" />
              {legend}
            </span>
          ))
        }
      />

      <ol
        className={styles.chart}
        style={{ '--bar-max-height': `${barMaxHeight}px` } as CSSProperties}
      >
        {data.map((datum) => (
          <li key={datum.id} className={styles.column}>
            <span
              className={cx(styles.bar, datum.highlighted && styles.barHighlighted)}
              style={{ '--bar-fill': datum.value / maxValue } as CSSProperties}
              title={numberFormat.format(datum.value)}
            />
            <span className={styles.label}>{datum.label}</span>
          </li>
        ))}
      </ol>
    </Panel>
  )
}
