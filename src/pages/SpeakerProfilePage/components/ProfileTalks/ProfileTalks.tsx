import chevronRightIcon from '../../../../assets/icons/chevron-right.svg'
import presentationIcon from '../../../../assets/icons/presentation-brand.svg'
import { TalkStatusBadge } from '../../../../components/TalkStatusBadge/TalkStatusBadge'
import { IconTile, LinkButton, ListItem, Panel, SectionHeader } from '../../../../components/ui'
import { profileTalks } from '../../../../mocks/speakerProfile'
import { routes, talkPath } from '../../../../routes'
import styles from './ProfileTalks.module.scss'

export function ProfileTalks() {
  return (
    <Panel gap="sm" aria-labelledby="profile-talks-title">
      <SectionHeader
        titleId="profile-talks-title"
        title="Доклады"
        description={profileTalks.summary}
      />

      <ul className={styles.list}>
        {profileTalks.items.map((talk) => (
          <ListItem
            key={talk.id}
            leading={<IconTile icon={presentationIcon} iconSize={16} />}
            title={talk.title}
            to={talkPath(talk.id)}
            description={talk.meta}
            trailing={
              <>
                <TalkStatusBadge status={talk.status} />
                <img src={chevronRightIcon} width={15} height={15} alt="" />
              </>
            }
          />
        ))}
      </ul>
    </Panel>
  )
}
