import type { ComponentPropsWithRef, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router'
import { cx } from '../../../utils/cx'
import styles from './Button.module.scss'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'md' | 'lg'

interface ButtonAppearance {
  variant?: ButtonVariant
  size?: ButtonSize
  iconLeft?: ReactNode
  iconRight?: ReactNode
  fullWidth?: boolean
}

export interface ButtonProps extends ButtonAppearance, ComponentPropsWithRef<'button'> {}

export interface LinkButtonProps extends ButtonAppearance, LinkProps {}

function buttonClassName(
  { variant = 'primary', size = 'md', fullWidth = false }: ButtonAppearance,
  className?: string,
) {
  return cx(styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth, className)
}

function ButtonContent({ iconLeft, iconRight, children }: ButtonAppearance & { children: ReactNode }) {
  return (
    <>
      {iconLeft && <span className={styles.icon} aria-hidden="true">{iconLeft}</span>}
      {children}
      {iconRight && <span className={styles.icon} aria-hidden="true">{iconRight}</span>}
    </>
  )
}

export function Button({
  variant,
  size,
  iconLeft,
  iconRight,
  fullWidth,
  type = 'button',
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, fullWidth }, className)}
      {...rest}
    >
      <ButtonContent iconLeft={iconLeft} iconRight={iconRight}>
        {children}
      </ButtonContent>
    </button>
  )
}

/** Router link that looks like a Button. */
export function LinkButton({
  variant,
  size,
  iconLeft,
  iconRight,
  fullWidth,
  className,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <Link className={buttonClassName({ variant, size, fullWidth }, className)} {...rest}>
      <ButtonContent iconLeft={iconLeft} iconRight={iconRight}>
        {children}
      </ButtonContent>
    </Link>
  )
}
