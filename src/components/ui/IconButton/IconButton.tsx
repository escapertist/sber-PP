import type { ComponentPropsWithRef } from 'react'
import { cx } from '../../../utils/cx'
import styles from './IconButton.module.scss'

export interface IconButtonProps extends ComponentPropsWithRef<'button'> {
  /** Icon asset URL; the icon keeps its own width/height. */
  icon: string
  iconSize: number
  /** Accessible name — the button has no visible text. */
  label: string
  size?: 'sm' | 'md'
  /** Highlighted state, e.g. a shortlisted bookmark or the active view. */
  active?: boolean
  bordered?: boolean
}

export function IconButton({
  icon,
  iconSize,
  label,
  size = 'md',
  active = false,
  bordered = true,
  type = 'button',
  className,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cx(
        styles.button,
        styles[size],
        bordered && styles.bordered,
        active && styles.active,
        className,
      )}
      {...rest}
    >
      <img src={icon} width={iconSize} height={iconSize} alt="" />
    </button>
  )
}
