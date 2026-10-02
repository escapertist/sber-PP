import micIcon from '../../../../assets/icons/mic-2-inverse.svg'
import usersIcon from '../../../../assets/icons/users.svg'
import shieldIcon from '../../../../assets/icons/shield-check.svg'
import type { Benefit, BenefitIcon } from '../../../../mocks/auth'
import styles from './BenefitItem.module.scss'

const icons: Record<BenefitIcon, string> = {
  mic: micIcon,
  users: usersIcon,
  shield: shieldIcon,
}

export type BenefitItemProps = Omit<Benefit, 'id'>

export function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <li className={styles.root}>
      <span className={styles.icon} aria-hidden="true">
        <img src={icons[icon]} width={18} height={18} alt="" />
      </span>
      <div className={styles.copy}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  )
}
