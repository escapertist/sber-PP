import { Panel, SectionHeader, Select } from '../../../../components/ui'
import { rankingPeriods, speakerRankings } from '../../../../mocks/organizer'
import { cx } from '../../../../utils/cx'
import styles from './SpeakerRankings.module.scss'

function formatDelta(delta: number) {
  if (delta === 0) return '—'
  return delta > 0 ? `+${delta}` : `−${Math.abs(delta)}`
}

export function SpeakerRankings() {
  return (
    <Panel gap="sm" aria-labelledby="speaker-rankings-title">
      <SectionHeader
        titleId="speaker-rankings-title"
        title="Рейтинг спикеров"
        description="Сводный балл по качеству, активности и охвату"
        action={
          <div className={styles.period}>
            <Select size="sm" aria-label="Период рейтинга" options={rankingPeriods} />
          </div>
        }
      />

      <ol className={styles.list}>
        {speakerRankings.map((ranking, index) => (
          <li key={ranking.id} className={styles.item}>
            <span className={cx(styles.rank, index === 0 && styles.rankLeader)}>{index + 1}</span>
            <span className={styles.name}>{ranking.name}</span>
            <span className={styles.score}>{ranking.score}</span>
            <span
              className={cx(
                styles.delta,
                ranking.delta > 0 && styles.deltaUp,
                ranking.delta < 0 && styles.deltaDown,
              )}
            >
              {formatDelta(ranking.delta)}
            </span>
          </li>
        ))}
      </ol>
    </Panel>
  )
}
