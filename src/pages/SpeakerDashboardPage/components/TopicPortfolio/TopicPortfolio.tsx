import { Button, Panel, ProgressBar, SectionHeader } from '../../../../components/ui'
import type { Topic } from '../../../../mocks/speakerDashboard'
import { cx } from '../../../../utils/cx'
import styles from './TopicPortfolio.module.scss'

export interface TopicPortfolioProps {
  topics: Topic[]
  className?: string
}

export function TopicPortfolio({ topics, className }: TopicPortfolioProps) {
  return (
    <Panel
      className={cx(styles.root, className)}
      aria-labelledby="topic-portfolio-title"
    >
      <SectionHeader
        titleId="topic-portfolio-title"
        title="Портфель тем"
        description="Ваши самые активные темы"
        action={<Button variant="ghost">Управлять</Button>}
      />

      <ol className={styles.list}>
        {topics.map((topic, index) => {
          const isLeading = index === 0

          return (
            <li key={topic.id} className={styles.topic}>
              <span className={cx(styles.rank, isLeading && styles.rankLeading)}>
                {index + 1}
              </span>
              <span className={styles.name}>{topic.name}</span>
              <ProgressBar
                value={topic.share}
                label={topic.name}
                fill={isLeading ? 'strong' : 'soft'}
                className={styles.meter}
              />
              <span className={styles.count}>{topic.talksCount}</span>
            </li>
          )
        })}
      </ol>
    </Panel>
  )
}
