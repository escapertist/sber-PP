import { BrandLogo } from '../../../../components/BrandLogo/BrandLogo'
import { benefits, welcomeContent } from '../../../../mocks/auth'
import { BenefitItem } from '../BenefitItem/BenefitItem'
import styles from './WelcomePanel.module.scss'

// const numberFormat = new Intl.NumberFormat('ru-RU')

export function WelcomePanel() {
  return (
    <aside className={styles.root}>
      <BrandLogo />

      <div className={styles.intro}>
        {/*<span className={styles.badge}>{welcomeContent.badge}</span>*/}
        <h2 className={styles.headline}>{welcomeContent.headline}</h2>
        <p className={styles.description}>{welcomeContent.description}</p>
      </div>

      <ul className={styles.benefits}>
        {benefits.map(({ id, ...benefit }) => (
          <BenefitItem key={id} {...benefit} />
        ))}
      </ul>

      {/*<div className={styles.proof}>*/}
      {/*  <MemberAvatars members={communityStats.featuredMembers} />*/}
      {/*  <p className={styles.proofText}>*/}
      {/*    {numberFormat.format(communityStats.membersCount)}+ участников сообщества*/}
      {/*  </p>*/}
      {/*</div>*/}
    </aside>
  )
}
