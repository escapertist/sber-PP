import { useId, type ComponentPropsWithRef, type ReactNode } from 'react'
import { Field } from '../Field/Field'
import styles from './Textarea.module.scss'

export interface TextareaProps extends ComponentPropsWithRef<'textarea'> {
  label?: ReactNode
  hint?: ReactNode
}

export function Textarea({ label, hint, id, className, ...rest }: TextareaProps) {
  const generatedId = useId()
  const textareaId = id ?? generatedId

  return (
    <Field controlId={textareaId} label={label} hint={hint} className={className}>
      <textarea id={textareaId} className={styles.textarea} {...rest} />
    </Field>
  )
}
