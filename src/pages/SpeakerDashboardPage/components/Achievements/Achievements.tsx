import awardIcon from '../../../../assets/icons/award.svg'
import flameIcon from '../../../../assets/icons/flame.svg'
import { IconTile, ListItem, Panel, ProgressBar, SectionHeader } from '../../../../components/ui'
import type { Achievement, AchievementIcon } from '../../../../mocks/speakerDashboard'
import styles from './Achievements.module.scss'

const icons: Record<AchievementIcon, string> = {
  award: awardIcon,
  flame: flameIcon,
}

export interface AchievementsProps {
  achievements: Achievement[]
  nextMilestone: {
    title: string
    description: string
    progress: number
  }
  className?: string
}

export function Achievements({ achievements, nextMilestone, className }: AchievementsProps) {
  return (
    <Panel className={className} aria-labelledby="achievements-title">
      <SectionHeader
        titleId="achievements-title"
        title="Достижения"
        description="Вехи вашей активности в клубе"
      />

      <ul className={styles.list}>
        {achievements.map((achievement) => (
          <ListItem
            key={achievement.id}
            plain
            size="sm"
            leading={
              <IconTile
                icon={icons[achievement.icon]}
                iconSize={21}
                size="lg"
                tone={achievement.tone}
                round
              />
            }
            title={achievement.title}
            description={achievement.description}
          />
        ))}
      </ul>

      <div className={styles.milestone}>
        <p className={styles.milestoneTitle}>{nextMilestone.title}</p>
        <p className={styles.milestoneDescription}>{nextMilestone.description}</p>
        <ProgressBar value={nextMilestone.progress} label={nextMilestone.title} size="sm" track="white" />
      </div>
    </Panel>
  )
}
