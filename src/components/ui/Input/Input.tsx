import { useId, type ComponentPropsWithRef, type ReactNode } from 'react'
import { cx } from '../../../utils/cx'
import { Field } from '../Field/Field'
import { fieldMessageId } from '../Field/fieldMessageId'
import styles from './Input.module.scss'

export interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: ReactNode
  icon?: ReactNode
  hint?: ReactNode
  error?: ReactNode
}

export function Input({ label, icon, hint, error, id, className, disabled, ...rest }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const hasMessage = Boolean(error ?? hint)

  return (
    <Field controlId={inputId} label={label} hint={hint} error={error} className={className}>
      <div
        className={cx(styles.control, Boolean(error) && styles.invalid, disabled && styles.disabled)}
      >
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        <input
          id={inputId}
          className={styles.input}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={hasMessage ? fieldMessageId(inputId) : undefined}
          {...rest}
        />
      </div>
    </Field>
  )
}
