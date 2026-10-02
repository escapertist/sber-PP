import globeIcon from '../../../../assets/icons/globe-2.svg'
import languagesIcon from '../../../../assets/icons/languages.svg'
import mailIcon from '../../../../assets/icons/mail-sm.svg'
import { Avatar, BadgeList, Panel } from '../../../../components/ui'
import { profileIdentity, type ProfileFactIcon } from '../../../../mocks/speakerProfile'
import styles from './IdentityCard.module.scss'

const factIcons: Record<ProfileFactIcon, string> = {
  mail: mailIcon,
  website: globeIcon,
  languages: languagesIcon,
}

export function IdentityCard() {
  const { name, initials, headline, statuses, bio, facts } = profileIdentity

  return (
    <Panel padding="lg" className={styles.root} aria-labelledby="profile-identity-name">
      <div className={styles.person}>
        <Avatar initials={initials} size="xxl" />
        <div className={styles.personCopy}>
          <h2 id="profile-identity-name" className={styles.name}>
            {name}
          </h2>
          <p className={styles.headline}>{headline}</p>
          <BadgeList items={statuses} aria-label="Статус" className={styles.statuses} />
        </div>
      </div>

      <p className={styles.bio}>{bio}</p>

      <ul className={styles.facts}>
        {facts.map((fact) => (
          <li key={fact.id} className={styles.fact}>
            <img src={factIcons[fact.icon]} width={15} height={15} alt="" />
            {fact.label}
          </li>
        ))}
      </ul>
    </Panel>
  )
}
