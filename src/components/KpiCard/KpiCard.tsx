import { IconTile, Panel, type IconTileTone } from '../ui'
import { cx } from '../../utils/cx'
import styles from './KpiCard.module.scss'

export interface KpiCardProps {
  label: string
  value: string
  change: string
  /** Positive changes are highlighted with the brand color. */
  positive: boolean
  /** Icon asset URL (16×16). */
  icon: string
  tone: IconTileTone
}

export function KpiCard({ label, value, change, positive, icon, tone }: KpiCardProps) {
  return (
    <Panel padding="none" gap="none" className={styles.root}>
      <div className={styles.heading}>
        <h3 className={styles.label}>{label}</h3>
        <IconTile icon={icon} iconSize={16} size="sm" tone={tone} />
      </div>
      <p className={styles.value}>{value}</p>
      <p className={cx(styles.change, positive && styles.positive)}>{change}</p>
    </Panel>
  )
}
