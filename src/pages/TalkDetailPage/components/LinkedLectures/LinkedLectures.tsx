import calendarDaysIcon from '../../../../assets/icons/calendar-days.svg'
import chevronRightIcon from '../../../../assets/icons/chevron-right.svg'
import plusIcon from '../../../../assets/icons/plus-dark.svg'
import { Badge, Button, IconTile, ListItem, Panel, SectionHeader } from '../../../../components/ui'
import { talkDetail } from '../../../../mocks/talks'
import styles from './LinkedLectures.module.scss'

export function LinkedLectures() {
  const { lectures } = talkDetail

  return (
    <Panel gap="sm" aria-labelledby="linked-lectures-title">
      <SectionHeader
        titleId="linked-lectures-title"
        title="Связанные лекции"
        description={`Этот доклад используется в ${lectures.length} выступлениях`}
        action={
          <Button
            variant="secondary"
            iconLeft={<img src={plusIcon} width={15} height={15} alt="" />}
          >
            Добавить лекцию
          </Button>
        }
      />

      <ul className={styles.list}>
        {lectures.map((lecture) => (
          <ListItem
            key={lecture.id}
            leading={<IconTile icon={calendarDaysIcon} iconSize={16} tone="info" />}
            title={lecture.event}
            description={lecture.details}
            trailing={
              <>
                <Badge>{lecture.status}</Badge>
                <img src={chevronRightIcon} width={15} height={15} alt="" />
              </>
            }
          />
        ))}
      </ul>
    </Panel>
  )
}
