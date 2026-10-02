import { cx } from '../../utils/cx'
import styles from './BrandLogo.module.scss'

export interface BrandLogoProps {
  name?: string
  tagline?: string
  className?: string
}

export function BrandLogo({
  name = 'Java Speaker Club',
  tagline = 'Пространство сообщества',
  className,
}: BrandLogoProps) {
  return (
    <div className={cx(styles.root, className)}>
      <span className={styles.mark} aria-hidden="true">
        {name.charAt(0)}
      </span>
      <span className={styles.text}>
        <span className={styles.name}>{name}</span>
        {tagline && <span className={styles.tagline}>{tagline}</span>}
      </span>
    </div>
  )
}
