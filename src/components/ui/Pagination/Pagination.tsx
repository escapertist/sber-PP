import chevronLeftIcon from '../../../assets/icons/chevron-left-page.svg'
import chevronRightIcon from '../../../assets/icons/chevron-right-page.svg'
import { cx } from '../../../utils/cx'
import styles from './Pagination.module.scss'

export interface PaginationProps {
  pageCount: number
  currentPage: number
  className?: string
}

export function Pagination({ pageCount, currentPage, className }: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1)

  return (
    <nav className={cx(styles.root, className)} aria-label="Пагинация">
      <button type="button" className={styles.page} aria-label="Предыдущая страница">
        <img src={chevronLeftIcon} width={14} height={14} alt="" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          aria-current={page === currentPage ? 'page' : undefined}
          className={cx(styles.page, page === currentPage && styles.current)}
        >
          {page}
        </button>
      ))}
      <button type="button" className={styles.page} aria-label="Следующая страница">
        <img src={chevronRightIcon} width={14} height={14} alt="" />
      </button>
    </nav>
  )
}
