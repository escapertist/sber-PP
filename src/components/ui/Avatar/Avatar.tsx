import { cx } from '../../../utils/cx'
import styles from './Avatar.module.scss'

export type AvatarSize = 'md' | 'lg' | 'xl' | 'xxl'
export type AvatarTone = 'brand' | 'accent'

export interface AvatarProps {
  initials: string
  size?: AvatarSize
  tone?: AvatarTone
  className?: string
}

export function Avatar({ initials, size = 'md', tone = 'brand', className }: AvatarProps) {
  return (
    <span className={cx(styles.avatar, styles[size], styles[tone], className)} aria-hidden="true">
      {initials}
    </span>
  )
}
