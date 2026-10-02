import { Panel, ProgressBar, SectionHeader } from '../../../../components/ui'
import { influenceBreakdown } from '../../../../mocks/organizer'
import styles from './InfluenceBreakdown.module.scss'

export interface InfluenceBreakdownProps {
  className?: string
}

export function InfluenceBreakdown({ className }: InfluenceBreakdownProps) {
  const maxValue = Math.max(...influenceBreakdown.map((item) => item.value))

  return (
    <Panel className={className} aria-labelledby="influence-breakdown-title">
      <SectionHeader
        titleId="influence-breakdown-title"
        title="Структура влияния"
        description="Охват аудитории по основным каналам"
      />

      <ul className={styles.list}>
        {influenceBreakdown.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.labels}>
              <span>{item.label}</span>
              <span className={styles.value}>{item.value}%</span>
            </span>
            {/* The largest channel fills three quarters of the track, as in the design. */}
            <ProgressBar
              value={(item.value / maxValue) * 75}
              label={item.label}
              fill={item.fill}
            />
          </li>
        ))}
      </ul>
    </Panel>
  )
}
