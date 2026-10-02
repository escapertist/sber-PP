import type { ReactNode } from 'react'
import chevronRightIcon from '../../../assets/icons/chevron-right-sm.svg'
import styles from './PageHeader.module.scss'

export interface PageHeaderBreadcrumb {
  /** Section path, e.g. «Спикер / Доклады». */
  section: string
  current: string
}

export interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  breadcrumb?: PageHeaderBreadcrumb
  /** Small uppercase line above the title, used instead of a breadcrumb. */
  eyebrow?: ReactNode
  actions?: ReactNode
}

export function PageHeader({ title, description, breadcrumb, eyebrow, actions }: PageHeaderProps) {
  return (
    <header className={styles.root}>
      {breadcrumb && (
        <nav className={styles.breadcrumb} aria-label="Хлебные крошки">
          <span className={styles.section}>{breadcrumb.section}</span>
          <img src={chevronRightIcon} width={13} height={13} alt="" />
          <span aria-current="page">{breadcrumb.current}</span>
        </nav>
      )}
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <div className={styles.titleRow}>
        <div className={styles.copy}>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </header>
  )
}
