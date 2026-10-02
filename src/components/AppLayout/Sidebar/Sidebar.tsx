import { Link } from 'react-router'
import blindSpotsIcon from '../../../assets/icons/nav/blind-spots.svg'
import blindSpotsActiveIcon from '../../../assets/icons/nav/blind-spots-active.svg'
import dashboardIcon from '../../../assets/icons/nav/dashboard.svg'
import dashboardActiveIcon from '../../../assets/icons/nav/dashboard-active.svg'
import eventsIcon from '../../../assets/icons/nav/events.svg'
import eventsActiveIcon from '../../../assets/icons/nav/events-active.svg'
import mediaIcon from '../../../assets/icons/nav/media.svg'
import mediaActiveIcon from '../../../assets/icons/nav/media-active.svg'
import profileIcon from '../../../assets/icons/nav/profile.svg'
import profileActiveIcon from '../../../assets/icons/nav/profile-active.svg'
import rolesIcon from '../../../assets/icons/nav/roles.svg'
import rolesActiveIcon from '../../../assets/icons/nav/roles-active.svg'
import speakersIcon from '../../../assets/icons/nav/speakers.svg'
import speakersActiveIcon from '../../../assets/icons/nav/speakers-active.svg'
import talksIcon from '../../../assets/icons/nav/talks.svg'
import talksActiveIcon from '../../../assets/icons/nav/talks-active.svg'
import type { UserRole } from '../../../mocks/auth'
import {
  navigation,
  workspaceBrand,
  type NavigationIcon,
} from '../../../mocks/workspace'
import { cx } from '../../../utils/cx'
import styles from './Sidebar.module.scss'

interface IconPair {
  default: string
  active: string
}

const navigationIcons: Record<NavigationIcon, IconPair> = {
  dashboard: { default: dashboardIcon, active: dashboardActiveIcon },
  profile: { default: profileIcon, active: profileActiveIcon },
  talks: { default: talksIcon, active: talksActiveIcon },
  media: { default: mediaIcon, active: mediaActiveIcon },
  speakers: { default: speakersIcon, active: speakersActiveIcon },
  blindSpots: { default: blindSpotsIcon, active: blindSpotsActiveIcon },
  events: { default: eventsIcon, active: eventsActiveIcon },
  roles: { default: rolesIcon, active: rolesActiveIcon },
}

export interface SidebarProps {
  role: UserRole
  activeNavigationId: string
}

export function Sidebar({ role, activeNavigationId }: SidebarProps) {
  return (
    <aside className={styles.root}>
      <div className={styles.brand}>
        <span className={styles.mark} aria-hidden="true">
          {workspaceBrand.name.charAt(0)}
        </span>
        <span className={styles.brandText}>
          <span className={styles.brandName}>{workspaceBrand.name}</span>
        </span>
      </div>

      <nav className={styles.navigation} aria-labelledby="sidebar-navigation-title">
        <p id="sidebar-navigation-title" className={styles.navigationTitle}>
          Рабочее пространство
        </p>
        <ul className={styles.navigationList}>
          {navigation[role].map((item) => {
            const isActive = item.id === activeNavigationId
            const icons = navigationIcons[item.icon]

            return (
              <li key={item.id}>
                <Link
                  to={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cx(styles.navigationItem, isActive && styles.navigationItemActive)}
                >
                  <img
                    src={isActive ? icons.active : icons.default}
                    width={17}
                    height={17}
                    alt=""
                  />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
