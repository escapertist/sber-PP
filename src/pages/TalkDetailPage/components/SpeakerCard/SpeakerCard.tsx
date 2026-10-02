import { Avatar, ListItem, MiniStat, Panel, SectionHeader } from '../../../../components/ui'
import { talkDetail } from '../../../../mocks/talks'
import styles from './SpeakerCard.module.scss'

export function SpeakerCard() {
  const { speaker } = talkDetail

  return (
    <Panel aria-labelledby="talk-speaker-title">
      <SectionHeader titleId="talk-speaker-title" title="Спикер" />

      <ul className={styles.identity}>
        <ListItem
          plain
          leading={<Avatar initials={speaker.initials} size="xl" />}
          title={speaker.name}
          description={speaker.position}
        />
      </ul>

      <dl className={styles.metrics}>
        {speaker.metrics.map((metric) => (
          <MiniStat key={metric.id} value={metric.value} label={metric.label} />
        ))}
      </dl>
    </Panel>
  )
}
