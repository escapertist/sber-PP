import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { cx } from '../../../utils/cx'
import styles from './ListItem.module.scss'

export interface ListItemProps {
  leading?: ReactNode
  title: ReactNode
  /** Turns the title into a router link. */
  to?: string
  description?: ReactNode
  trailing?: ReactNode
  /** Removes the padding and bottom divider, e.g. inside table cells or compact lists. */
  plain?: boolean
  /** Title size: 14px (md) or 13px (sm). */
  size?: 'sm' | 'md'
  /** Cuts long copy with an ellipsis instead of wrapping. */
  truncate?: boolean
  /** Render as a list item (default) or a plain block, e.g. inside a table cell. */
  as?: 'li' | 'div'
  className?: string
}

/** Row with an optional leading visual, two lines of copy and trailing meta/actions. */
export function ListItem({
  leading,
  title,
  to,
  description,
  trailing,
  plain = false,
  size = 'md',
  truncate = false,
  as: Element = 'li',
  className,
}: ListItemProps) {
  return (
    <Element
      className={cx(
        styles.root,
        styles[size],
        plain && styles.plain,
        truncate && styles.truncate,
        className,
      )}
    >
      {leading}
      <div className={styles.copy}>
        <p className={styles.title}>
          {to ? (
            <Link to={to} className={styles.link}>
              {title}
            </Link>
          ) : (
            title
          )}
        </p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {trailing}
    </Element>
  )
}
