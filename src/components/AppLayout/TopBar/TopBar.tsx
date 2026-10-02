import bellIcon from '../../../assets/icons/bell.svg'
import chevronDownIcon from '../../../assets/icons/chevron-down.svg'
import searchIcon from '../../../assets/icons/search.svg'
import type { UserRole } from '../../../mocks/auth'
import { currentUser, workspaceRoles } from '../../../mocks/workspace'
import { cx } from '../../../utils/cx'
import { Avatar } from '../../ui'
import styles from './TopBar.module.scss'

export interface TopBarProps {
  role: UserRole
}

export function TopBar({ role }: TopBarProps) {
  const { label: roleLabel, workspaceLabel } = workspaceRoles[role]

  return (
    <header className={styles.root}>
      <div className={styles.label}>
        <span className={styles.statusDot} aria-hidden="true" />
        {workspaceLabel}
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.iconButton} aria-label="Поиск">
          <img src={searchIcon} width={18} height={18} alt="" />
        </button>
        <button
          type="button"
          className={cx(styles.iconButton, styles.notifications)}
          aria-label="Уведомления"
        >
          <img src={bellIcon} width={17} height={17} alt="" />
        </button>
        <span className={styles.separator} aria-hidden="true" />
        <button type="button" className={styles.account} aria-label="Меню аккаунта">
          <Avatar initials={currentUser.initials} />
          <span className={styles.accountText}>
            <span className={styles.accountName}>{currentUser.name}</span>
            <span className={styles.accountRole}>{roleLabel}</span>
          </span>
          <img src={chevronDownIcon} width={14} height={14} alt="" />
        </button>
      </div>
    </header>
  )
}
