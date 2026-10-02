import type { ComponentPropsWithRef, ReactNode } from 'react'
import checkIcon from '../../../assets/icons/check.svg'
import { cx } from '../../../utils/cx'
import styles from './Checkbox.module.scss'

export interface CheckboxProps extends Omit<ComponentPropsWithRef<'input'>, 'type'> {
  label?: ReactNode
}

export function Checkbox({ label, className, ...rest }: CheckboxProps) {
  return (
    <label className={cx(styles.root, className)}>
      <input type="checkbox" className={styles.input} {...rest} />
      <span className={styles.box} aria-hidden="true">
        <img src={checkIcon} width={12} height={12} alt="" className={styles.check} />
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}
