import type { ComponentPropsWithRef } from 'react'
import { cx } from '../../../utils/cx'
import styles from './Card.module.scss'

export type CardVariant = 'outlined' | 'filled'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends ComponentPropsWithRef<'div'> {
  variant?: CardVariant
  padding?: CardPadding
  /** Highlights the card as the active choice (brand border + tinted background). */
  selected?: boolean
  /** Adds hover feedback for clickable cards. */
  interactive?: boolean
}

export function Card({
  variant = 'outlined',
  padding = 'sm',
  selected = false,
  interactive = false,
  className,
  ...rest
}: CardProps) {
  return (
    <div
      className={cx(
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        interactive && styles.interactive,
        selected && styles.selected,
        className,
      )}
      {...rest}
    />
  )
}
