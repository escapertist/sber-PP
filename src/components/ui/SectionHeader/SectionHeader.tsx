import type { ReactNode } from 'react'
import styles from './SectionHeader.module.scss'

export interface SectionHeaderProps {
  title: ReactNode
  description?: ReactNode
  /** Id for the title, so the parent section can reference it via aria-labelledby. */
  titleId?: string
  action?: ReactNode
}

export function SectionHeader({ title, description, titleId, action }: SectionHeaderProps) {
  return (
    <header className={styles.root}>
      <div className={styles.copy}>
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {action}
    </header>
  )
}
