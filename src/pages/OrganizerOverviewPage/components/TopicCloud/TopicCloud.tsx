import { Panel, SectionHeader } from '../../../../components/ui'
import { topicCloud } from '../../../../mocks/organizer'
import { cx } from '../../../../utils/cx'
import styles from './TopicCloud.module.scss'

export function TopicCloud() {
  return (
    <Panel aria-labelledby="topic-cloud-title">
      <SectionHeader
        titleId="topic-cloud-title"
        title="Облако тем"
        description="Самые представленные компетенции среди активных спикеров"
      />

      <ul className={styles.cloud}>
        {topicCloud.map((topic) => (
          <li
            key={topic.id}
            className={cx(styles.topic, topic.featured && styles.featured)}
            style={{ fontSize: topic.size }}
          >
            {topic.label}
          </li>
        ))}
      </ul>
    </Panel>
  )
}
