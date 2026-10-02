import ellipsisIcon from '../../assets/icons/ellipsis.svg'
import plusIcon from '../../assets/icons/plus.svg'
import presentationIcon from '../../assets/icons/presentation-brand.svg'
import { AppLayout } from '../../components/AppLayout/AppLayout'
import { FilterPanel } from '../../components/FilterPanel/FilterPanel'
import { TalkStatusBadge } from '../../components/TalkStatusBadge/TalkStatusBadge'
import {
  Badge,
  Button,
  DataTable,
  IconButton,
  IconTile,
  ListItem,
  PageHeader,
  Pagination,
  type DataTableColumn,
  VisuallyHidden,
} from '../../components/ui'
import {
  catalogFilters,
  catalogHeading,
  catalogPagination,
  catalogSummary,
  conferenceTypes,
  talks,
  type Talk,
} from '../../mocks/talks'
import { talkPath } from '../../routes'
import { CatalogSummary } from './components/CatalogSummary/CatalogSummary'
import styles from './TalksCatalogPage.module.scss'

const columns: DataTableColumn<Talk>[] = [
  {
    key: 'talk',
    header: 'Доклад',
    width: 360,
    render: (talk) => (
      <ListItem
        as="div"
        plain
        truncate
        leading={<IconTile icon={presentationIcon} iconSize={16} />}
        title={talk.title}
        to={talkPath(talk.id)}
        description={talk.topics}
      />
    ),
  },
  {
    key: 'type',
    header: 'Тип конференции',
    width: 138,
    render: (talk) => <Badge tone="neutral">{conferenceTypes[talk.conferenceType]}</Badge>,
  },
  { key: 'format', header: 'Формат', width: 138, render: (talk) => talk.format },
  { key: 'updated', header: 'Обновлён', width: 126, render: (talk) => talk.updatedAt },
  {
    key: 'lectures',
    header: 'Лекции',
    width: 80,
    render: (talk) => <span className={styles.strong}>{talk.lecturesCount}</span>,
  },
  {
    key: 'status',
    header: 'Статус',
    width: 95,
    render: (talk) => <TalkStatusBadge status={talk.status} />,
  },
  {
    key: 'actions',
    header: <VisuallyHidden>Действия</VisuallyHidden>,
    width: 38,
    render: (talk) => (
      <IconButton
        icon={ellipsisIcon}
        iconSize={16}
        label={`Действия с докладом «${talk.title}»`}
        bordered={false}
      />
    ),
  },
]

export function TalksCatalogPage() {
  return (
    <AppLayout role="speaker" activeNavigationId="talks">
      <PageHeader
        breadcrumb={catalogHeading.breadcrumb}
        title={catalogHeading.title}
        description={catalogHeading.description}
        actions={
          <Button iconLeft={<img src={plusIcon} width={15} height={15} alt="" />}>
            Создать доклад
          </Button>
        }
      />

      <CatalogSummary items={catalogSummary} />

      <FilterPanel
        searchPlaceholder="Поиск по докладам, темам, событиям…"
        selects={[
          {
            id: 'type',
            label: 'Тип конференции',
            options: catalogFilters.conferenceTypes,
            width: 210,
          },
          { id: 'status', label: 'Статус', options: catalogFilters.statuses, width: 150 },
          { id: 'sort', label: 'Сортировка', options: catalogFilters.sorting, width: 190 },
        ]}
        resetLabel="Сбросить фильтры"
        chipsLabel="Быстрые фильтры"
        chips={catalogFilters.quickFilters}
        summary={catalogPagination.resultCount}
      />

      <DataTable
        aria-label="Доклады"
        columns={columns}
        rows={talks}
        getRowKey={(talk) => talk.id}
        footer={
          <>
            <span className={styles.footerText}>{catalogPagination.summary}</span>
            <Pagination
              pageCount={catalogPagination.pageCount}
              currentPage={catalogPagination.currentPage}
            />
          </>
        }
      />
    </AppLayout>
  )
}
