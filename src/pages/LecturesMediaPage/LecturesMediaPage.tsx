import calendarDaysIcon from '../../assets/icons/calendar-days-brand.svg'
import fileCheckIcon from '../../assets/icons/file-check-2.svg'
import fileWarningIcon from '../../assets/icons/file-warning.svg'
import loaderCircleIcon from '../../assets/icons/loader-circle.svg'
import plusIcon from '../../assets/icons/plus.svg'
import { AppLayout } from '../../components/AppLayout/AppLayout'
import { FilterPanel } from '../../components/FilterPanel/FilterPanel'
import {
  Button,
  Columns,
  PageHeader,
  Stack,
  StatCard,
} from '../../components/ui'
import {
  fileStatusFilter,
  mediaHeading,
  mediaSummary,
  type MediaMetricIcon,
} from '../../mocks/media'
import { LecturesTable } from './components/LecturesTable/LecturesTable'
import styles from './LecturesMediaPage.module.scss'

const metricIcons: Record<MediaMetricIcon, string> = {
  lectures: calendarDaysIcon,
  ready: fileCheckIcon,
  processing: loaderCircleIcon,
  missing: fileWarningIcon,
}

export function LecturesMediaPage() {
  return (
    <AppLayout role="speaker" activeNavigationId="media">
      <PageHeader
        breadcrumb={mediaHeading.breadcrumb}
        title={mediaHeading.title}
        description={mediaHeading.description}
        actions={
          <Button iconLeft={<img src={plusIcon} width={15} height={15} alt="" />}>
            Добавить лекцию
          </Button>
        }
      />

      <Columns widths={mediaSummary.map(() => 1)} gap="sm">
        {mediaSummary.map((metric) => (
          <StatCard
            key={metric.id}
            value={metric.value}
            label={metric.label}
            icon={metricIcons[metric.icon]}
          />
        ))}
      </Columns>

        <Stack className={styles.listColumn}>
          <FilterPanel
            searchPlaceholder="Поиск по лекциям и событиям…"
            selects={[
              { id: 'status', label: 'Статус файла', options: fileStatusFilter, width: 190 },
            ]}
            resetLabel="Сбросить"
          />
          <LecturesTable />
        </Stack>
        {/*<AddLecturePanel />*/}

      {/*<Callout*/}
      {/*  icon={infoIcon}*/}
      {/*  action={*/}
      {/*    <Button variant="ghost" className={styles.calloutAction}>*/}
      {/*      Правила для медиа*/}
      {/*    </Button>*/}
      {/*  }*/}
      {/*>*/}
      {/*  Файлы проверяются антивирусом, прежде чем станут доступны. Обработка обычно занимает меньше*/}
      {/*  двух минут.*/}
      {/*</Callout>*/}
    </AppLayout>
  )
}
