import downloadIcon from '../../assets/icons/download.svg'
import grid2x2Icon from '../../assets/icons/grid-2x2.svg'
import listIcon from '../../assets/icons/list.svg'
import userPlusIcon from '../../assets/icons/user-plus.svg'
import { AppLayout } from '../../components/AppLayout/AppLayout'
import { FilterPanel } from '../../components/FilterPanel/FilterPanel'
import { Button, IconButton, PageHeader, Select } from '../../components/ui'
import { directoryFilters, directoryHeading, directorySummary } from '../../mocks/organizer'
import { SpeakersTable } from './components/SpeakersTable/SpeakersTable'
import styles from './SpeakerDirectoryPage.module.scss'

export function SpeakerDirectoryPage() {
  return (
    <AppLayout role="organizer" activeNavigationId="speakers">
      <PageHeader
        breadcrumb={directoryHeading.breadcrumb}
        title={directoryHeading.title}
        description={directoryHeading.description}
        actions={
          <>
            <Button
              variant="secondary"
              iconLeft={<img src={downloadIcon} width={15} height={15} alt="" />}
            >
              Экспорт шорт-листа
            </Button>
            <Button iconLeft={<img src={userPlusIcon} width={15} height={15} alt="" />}>
              Пригласить спикера
            </Button>
          </>
        }
      />

      <FilterPanel
        searchPlaceholder="Поиск по имени, теме или компании…"
        selects={[
          { id: 'role', label: 'Роль', options: directoryFilters.roles, width: 145 },
          { id: 'region', label: 'Регион', options: directoryFilters.regions, width: 160 },
          { id: 'company', label: 'Компания', options: directoryFilters.companies, width: 170 },
          { id: 'influence', label: 'Влияние', options: directoryFilters.influence, width: 180 },
        ]}
        chipsLabel="Диапазон NPS"
        chips={directoryFilters.nps}
        summary={directorySummary.activeFilters}
        resetLabel="Сбросить всё"
        resetPlacement="chips"
      />

      <div className={styles.toolbar}>
        <div className={styles.count}>
          <h2 className={styles.countTitle}>{directorySummary.total}</h2>
          <p className={styles.countHint}>{directorySummary.shortlisted}</p>
        </div>
        <div className={styles.viewControls}>
          <div className={styles.sort}>
            <Select aria-label="Сортировка" options={directoryFilters.sorting} />
          </div>
          <div className={styles.viewToggle} role="group" aria-label="Вид списка">
            <IconButton
              icon={listIcon}
              iconSize={15}
              size="sm"
              bordered={false}
              active
              aria-pressed
              label="Таблица"
            />
            <IconButton
              icon={grid2x2Icon}
              iconSize={15}
              size="sm"
              bordered={false}
              aria-pressed={false}
              label="Карточки"
            />
          </div>
        </div>
      </div>

      <SpeakersTable />
    </AppLayout>
  )
}
