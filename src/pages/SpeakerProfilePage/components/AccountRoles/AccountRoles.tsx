import briefcaseIcon from '../../../../assets/icons/briefcase-business.svg'
import micIcon from '../../../../assets/icons/mic-2.svg'
import type { UserRole } from '../../../../mocks/auth'
import { accountRoles } from '../../../../mocks/speakerProfile'
import { Panel, SectionHeader } from '../../../../components/ui'
import { cx } from '../../../../utils/cx'
import styles from './AccountRoles.module.scss'

const roleIcons: Record<UserRole, string> = {
  speaker: micIcon,
  organizer: briefcaseIcon,
}

export function AccountRoles() {
  return (
    <Panel aria-labelledby="account-roles-title">
      <SectionHeader
        titleId="account-roles-title"
        title="Роли аккаунта"
        description="Роли определяют доступ и видимость в каталоге"
      />

      <ul className={styles.roles}>
        {accountRoles.map((role) => (
          <li key={role.id} className={cx(styles.role, role.primary && styles.primary)}>
            <span className={styles.title}>
              <img src={roleIcons[role.role]} width={16} height={16} alt="" />
              {role.title}
            </span>
            <span className={styles.meta}>{role.meta}</span>
          </li>
        ))}
      </ul>
    </Panel>
  )
}
