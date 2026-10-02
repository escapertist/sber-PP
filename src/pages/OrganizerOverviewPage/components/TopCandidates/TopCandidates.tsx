import bookmarkIcon from '../../../../assets/icons/bookmark.svg'
import {
  Avatar,
  Badge,
  IconButton,
  LinkButton,
  ListItem,
  Panel,
  SectionHeader,
} from '../../../../components/ui'
import { topCandidates } from '../../../../mocks/organizer'
import { routes } from '../../../../routes'
import { cx } from '../../../../utils/cx'
import styles from './TopCandidates.module.scss'

/** Places that get the brand rank color. */
const PODIUM_SIZE = 3

export function TopCandidates() {
  return (
    <Panel gap="sm" aria-labelledby="top-candidates-title">
      <SectionHeader
        titleId="top-candidates-title"
        title="Лучшие кандидаты"
        description="Максимальное совпадение с открытыми запросами событий"
        action={
          <LinkButton to={routes.organizerSpeakers} variant="ghost">
            Открыть каталог
          </LinkButton>
        }
      />

      <ol className={styles.list}>
        {topCandidates.map(({ speaker, focus, match }, index) => (
          <ListItem
            key={speaker.id}
            size="sm"
            className={styles.item}
            leading={
              <>
                <span className={cx(styles.rank, index < PODIUM_SIZE && styles.rankPodium)}>
                  #{index + 1}
                </span>
                <Avatar initials={speaker.initials} tone={speaker.avatarTone} />
              </>
            }
            title={speaker.name}
            description={focus}
            trailing={
              <>
                <span className={styles.nps}>
                  <span className={styles.npsValue}>{speaker.nps}</span>
                  <span className={styles.npsLabel}>NPS</span>
                </span>
                <Badge>{match}%</Badge>
                <IconButton
                  icon={bookmarkIcon}
                  iconSize={15}
                  size="sm"
                  bordered={false}
                  label={`Добавить ${speaker.name} в шорт-лист`}
                />
              </>
            }
          />
        ))}
      </ol>
    </Panel>
  )
}
