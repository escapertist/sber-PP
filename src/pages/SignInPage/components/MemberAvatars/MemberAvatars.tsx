import type { CommunityMember } from '../../../../mocks/auth'
import styles from './MemberAvatars.module.scss'

export interface MemberAvatarsProps {
  members: CommunityMember[]
}

export function MemberAvatars({ members }: MemberAvatarsProps) {
  return (
    <ul className={styles.root} aria-label="Участники сообщества">
      {members.map((member) => (
        <li key={member.id} className={styles.avatar}>
          {member.initials}
        </li>
      ))}
    </ul>
  )
}
