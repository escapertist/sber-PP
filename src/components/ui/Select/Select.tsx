import { useId, type ComponentPropsWithRef, type ReactNode } from 'react'
import { cx } from '../../../utils/cx'
import { Field } from '../Field/Field'
import styles from './Select.module.scss'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends Omit<ComponentPropsWithRef<'select'>, 'size'> {
  options: ReadonlyArray<SelectOption>
  label?: ReactNode
  hint?: ReactNode
  /** Compact variant for toolbars inside panels. */
  size?: 'sm' | 'md'
}

export function Select({ options, label, hint, size = 'md', id, className, ...rest }: SelectProps) {
  const generatedId = useId()
  const selectId = id ?? generatedId

  return (
    <Field controlId={selectId} label={label} hint={hint} className={className}>
      <select id={selectId} className={cx(styles.select, styles[size])} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Field>
  )
}
