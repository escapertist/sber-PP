import type { ComponentPropsWithRef } from 'react'
import { cx } from '../../../utils/cx'
import styles from './Panel.module.scss'

export type PanelPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg'

export interface PanelProps extends ComponentPropsWithRef<'section'> {
  padding?: PanelPadding
  /** Vertical gap between direct children. */
  gap?: 'none' | 'sm' | 'md' | 'lg'
}

/** White bordered workspace block used across dashboard pages. */
export function Panel({ padding = 'md', gap = 'md', className, ...rest }: PanelProps) {
  return (
    <section
      className={cx(styles.panel, styles[`padding-${padding}`], styles[`gap-${gap}`], className)}
      {...rest}
    />
  )
}
