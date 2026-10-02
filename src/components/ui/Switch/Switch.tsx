import type { ComponentPropsWithRef, ReactNode } from 'react'
import { cx } from '../../../utils/cx'
import styles from './Switch.module.scss'

export interface SwitchProps extends Omit<ComponentPropsWithRef<'input'>, 'type'> {
  label: ReactNode
  description?: ReactNode
}

export function Switch({ label, description, className, ...rest }: SwitchProps) {
  return (
    <label className={cx(styles.root, className)}>
      <input type="checkbox" role="switch" className={styles.input} {...rest} />
      <span className={styles.track} aria-hidden="true">
        <span className={styles.knob} />
      </span>
      <span className={styles.copy}>
        <span className={styles.label}>{label}</span>
        {description && <span className={styles.description}>{description}</span>}
      </span>
    </label>
  )
}
