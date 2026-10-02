import { cx } from '../../../utils/cx'
import styles from './IconTile.module.scss'

export type IconTileSize = 'sm' | 'md' | 'lg'
export type IconTileTone = 'brand' | 'brand-soft' | 'neutral' | 'white' | 'info' | 'accent' | 'warning'

export interface IconTileProps {
  /** Icon asset URL; the icon keeps its own width/height. */
  icon: string
  iconSize: number
  size?: IconTileSize
  tone?: IconTileTone
  round?: boolean
  className?: string
}

/** Tinted square (or circle) with a centered decorative icon. */
export function IconTile({
  icon,
  iconSize,
  size = 'md',
  tone = 'brand-soft',
  round = false,
  className,
}: IconTileProps) {
  return (
    <span
      className={cx(styles.tile, styles[size], styles[tone], round && styles.round, className)}
      aria-hidden="true"
    >
      <img src={icon} width={iconSize} height={iconSize} alt="" />
    </span>
  )
}
