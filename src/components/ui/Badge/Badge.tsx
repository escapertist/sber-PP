import type { ComponentPropsWithRef } from 'react'
import { cx } from '../../../utils/cx'
import styles from './Badge.module.scss'

export type BadgeTone = 'brand' | 'neutral' | 'info' | 'accent' | 'warning' | 'danger'

export interface BadgeProps extends ComponentPropsWithRef<'span'> {
  tone?: BadgeTone
}

export function Badge({ tone = 'brand', className, ...rest }: BadgeProps) {
  return <span className={cx(styles.badge, styles[tone], className)} {...rest} />
}
