import { Panel, SectionHeader } from '../../../../components/ui'
import { talkDetail } from '../../../../mocks/talks'
import styles from './ActivityTimeline.module.scss'

export function ActivityTimeline() {
  return (
    <Panel aria-labelledby="talk-activity-title">
      <SectionHeader titleId="talk-activity-title" title="Активность" />

      <ol className={styles.list}>
        {talkDetail.activity.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.dot} aria-hidden="true" />
            <div className={styles.copy}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.time}>{item.time}</p>
            </div>
          </li>
        ))}
      </ol>
    </Panel>
  )
}
