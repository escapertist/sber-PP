import awardIcon from '../../../../assets/icons/award-sm.svg'
import pencilIcon from '../../../../assets/icons/pencil.svg'
import starIcon from '../../../../assets/icons/star.svg'
import uploadIcon from '../../../../assets/icons/upload.svg'
import { IconTile, ListItem, Panel, SectionHeader } from '../../../../components/ui'
import { profileActivity, type ProfileActivityIcon } from '../../../../mocks/speakerProfile'
import styles from './ProfileActivity.module.scss'

const icons: Record<ProfileActivityIcon, string> = {
  upload: uploadIcon,
  star: starIcon,
  pencil: pencilIcon,
  award: awardIcon,
}

export function ProfileActivity() {
  return (
    <Panel aria-labelledby="profile-activity-title">
      <SectionHeader
        titleId="profile-activity-title"
        title="Последние события"
        description="Свежие изменения в вашем профиле"
      />

      <ul className={styles.list}>
        {profileActivity.map((item) => (
          <ListItem
            key={item.id}
            plain
            size="sm"
            className={styles.item}
            leading={
              <IconTile icon={icons[item.icon]} iconSize={15} size="sm" tone="neutral" round />
            }
            title={item.title}
            description={item.meta}
          />
        ))}
      </ul>
    </Panel>
  )
}
