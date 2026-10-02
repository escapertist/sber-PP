import { cx } from '../../../utils/cx'
import styles from './ProgressBar.module.scss'

export interface ProgressBarProps {
  /** Fill, 0–100. */
  value: number
  /** Accessible name of the progress bar. */
  label: string
  size?: 'sm' | 'md'
  /** Track color: tinted on white surfaces, white on tinted surfaces. */
  track?: 'tinted' | 'white'
  /** Fill color: strong brand, a soft brand tint for secondary values, or a category color. */
  fill?: 'strong' | 'soft' | 'info' | 'accent' | 'warning'
  className?: string
}

export function ProgressBar({
  value,
  label,
  size = 'md',
  track = 'tinted',
  fill = 'strong',
  className,
}: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      className={cx(styles.track, styles[size], styles[track], className)}
    >
      <span className={cx(styles.fill, styles[fill])} style={{ width: `${value}%` }} />
    </div>
  )
}
