import micIcon from '../../../../assets/icons/mic-2.svg'
import briefcaseIcon from '../../../../assets/icons/briefcase-business.svg'
import { Card } from '../../../../components/ui'
import type { RoleOption, UserRole } from '../../../../mocks/auth'
import styles from './RoleCard.module.scss'

const icons: Record<UserRole, string> = {
  speaker: micIcon,
  organizer: briefcaseIcon,
}

export interface RoleCardProps extends RoleOption {
  name: string
  checked: boolean
  onSelect: (role: UserRole) => void
}

export function RoleCard({ id, title, hint, name, checked, onSelect }: RoleCardProps) {
  return (
    <label className={styles.root}>
      <input
        type="radio"
        name={name}
        value={id}
        checked={checked}
        onChange={() => onSelect(id)}
        className={styles.input}
      />
      <Card interactive selected={checked} className={styles.card}>
        <img src={icons[id]} width={16} height={16} alt="" />
        <span className={styles.copy}>
          <span className={styles.title}>{title}</span>
          <span className={styles.hint}>{hint}</span>
        </span>
      </Card>
    </label>
  )
}
