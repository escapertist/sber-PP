import type { ComponentPropsWithRef } from 'react'
import { cx } from '../../../utils/cx'
import styles from './Chip.module.scss'

export interface ChipProps extends ComponentPropsWithRef<'button'> {
  selected?: boolean
}

/** Toggleable pill used for quick filters. */
export function Chip({ selected = false, type = 'button', className, ...rest }: ChipProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={cx(styles.chip, selected && styles.selected, className)}
      {...rest}
    />
  )
}
