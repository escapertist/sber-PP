import calendarDaysIcon from '../../../../assets/icons/calendar-days-brand.svg'
import downloadIcon from '../../../../assets/icons/download-sm.svg'
import eyeIcon from '../../../../assets/icons/eye-sm.svg'
import fileTextIcon from '../../../../assets/icons/file-text.svg'
import fileMissingIcon from '../../../../assets/icons/file-x-2.svg'
import trashIcon from '../../../../assets/icons/trash-2-sm.svg'
import {
  Badge,
  DataTable,
  IconButton,
  IconTile,
  ListItem,
  type DataTableColumn,
} from '../../../../components/ui'
import { fileStatuses, lectures, type Lecture } from '../../../../mocks/media'
import { cx } from '../../../../utils/cx'
import styles from './LecturesTable.module.scss'

const columns: DataTableColumn<Lecture>[] = [
  {
    key: 'lecture',
    header: 'Событие и доклад',
    width: 312,
    render: (lecture) => (
      <ListItem
        as="div"
        plain
        truncate
        size="sm"
        leading={<IconTile icon={calendarDaysIcon} iconSize={16} />}
        title={'Java конференция'}
        description={'Тема конференции'}
      />
    ),
  },
  {
    key: 'date',
    header: 'Дата',
    width: 100,
    render: (lecture) => <span className={styles.small}>{'1 янв. 2027'}</span>,
  },
  // {
  //   key: 'file',
  //   header: 'Презентация',
  //   width: 160,
  //   render: (lecture) => (
  //     <span className={cx(styles.file, !lecture.fileName && styles.fileMissing)}>
  //       <img
  //         src={lecture.fileName ? fileTextIcon : fileMissingIcon}
  //         width={15}
  //         height={15}
  //         alt=""
  //       />
  //       <span className={styles.fileName}>{lecture.fileName ?? 'Нет файла'}</span>
  //     </span>
  //   ),
  // },
  // {
  //   key: 'status',
  //   header: 'Статус',
  //   width: 100,
  //   render: (lecture) => (
  //     <Badge tone={fileStatuses[lecture.status]}>{fileStatuses[lecture.status]}</Badge>
  //   ),
  // },
  {
    key: 'actions',
    header: 'Действия',
    width: 120,
    render: (lecture) => (
      <div className={styles.actions}>
        <IconButton icon={eyeIcon} iconSize={14} size="sm" label={`Открыть: ${lecture.event}`} />
        <IconButton
          icon={downloadIcon}
          iconSize={14}
          size="sm"
          label={`Скачать: ${lecture.event}`}
        />
      </div>
    ),
  },
]

export function LecturesTable() {
  return (
    <DataTable
      aria-label="Лекции"
      columns={columns}
      rows={lectures}
      getRowKey={(lecture) => lecture.id}
      rowHeight={82}
    />
  )
}
