import arrowUpRightIcon from '../../../../assets/icons/arrow-up-right.svg'
import badgeCheckIcon from '../../../../assets/icons/badge-check.svg'
import bookmarkActiveIcon from '../../../../assets/icons/bookmark-active.svg'
import bookmarkIcon from '../../../../assets/icons/bookmark.svg'
import {
  Avatar,
  Badge,
  DataTable,
  IconButton,
  ListItem,
  type DataTableColumn,
  VisuallyHidden,
} from '../../../../components/ui'
import {
  candidateSignals,
  influenceLevels,
  speakers,
  type Speaker,
} from '../../../../mocks/organizer'
import { cx } from '../../../../utils/cx'
import styles from './SpeakersTable.module.scss'

const columns: DataTableColumn<Speaker>[] = [
  {
    key: 'speaker',
    header: 'Спикер',
    width: 265,
    render: (speaker) => (
      <ListItem
        as="div"
        plain
        truncate
        leading={<Avatar initials={speaker.initials} size="lg" tone={speaker.avatarTone} />}
        title={
          <span className={styles.name}>
            {speaker.name}
            {speaker.verified && (
              <img src={badgeCheckIcon} width={14} height={14} alt="Проверенный спикер" />
            )}
          </span>
        }
        description={speaker.position}
      />
    ),
  },
  { key: 'expertise', header: 'Экспертиза', width: 210, render: (speaker) => speaker.expertise },
  { key: 'region', header: 'Регион', width: 120, render: (speaker) => speaker.region },
  {
    key: 'nps',
    header: 'NPS',
    width: 64,
    render: (speaker) => (
      <span className={cx(styles.nps, speaker.nps === null && styles.npsEmpty)}>
        {speaker.nps ?? '—'}
      </span>
    ),
  },
  {
    key: 'influence',
    header: 'Влияние',
    width: 90,
    render: (speaker) => (
      <Badge tone={influenceLevels[speaker.influence].tone}>
        {influenceLevels[speaker.influence].label}
      </Badge>
    ),
  },
  {
    key: 'signal',
    header: 'Сигнал',
    width: 120,
    render: (speaker) => (
      <Badge tone={candidateSignals[speaker.signal].tone}>
        {candidateSignals[speaker.signal].label}
      </Badge>
    ),
  },
  {
    key: 'actions',
    header: <VisuallyHidden>Действия</VisuallyHidden>,
    width: 82,
    render: (speaker) => (
      <div className={styles.actions}>
        <IconButton
          icon={speaker.shortlisted ? bookmarkActiveIcon : bookmarkIcon}
          iconSize={15}
          active={speaker.shortlisted}
          aria-pressed={speaker.shortlisted}
          label={`Шорт-лист: ${speaker.name}`}
        />
        <IconButton icon={arrowUpRightIcon} iconSize={15} label={`Открыть профиль: ${speaker.name}`} />
      </div>
    ),
  },
]

export function SpeakersTable() {
  return (
    <DataTable
      aria-label="Спикеры"
      columns={columns}
      rows={speakers}
      getRowKey={(speaker) => speaker.id}
      rowHeight={76}
      isRowHighlighted={(speaker) => speaker.signal === 'top'}
    />
  )
}
