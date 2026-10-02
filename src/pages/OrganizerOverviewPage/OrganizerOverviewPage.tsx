import badgeCheckIcon from '../../assets/icons/badge-check-info.svg'
import downloadIcon from '../../assets/icons/download.svg'
import listPlusIcon from '../../assets/icons/list-plus.svg'
import starIcon from '../../assets/icons/star-brand.svg'
import trendingUpIcon from '../../assets/icons/trending-up-accent.svg'
import usersIcon from '../../assets/icons/users-brand.svg'
import { AppLayout } from '../../components/AppLayout/AppLayout'
import { BarChart } from '../../components/BarChart/BarChart'
import { KpiCard } from '../../components/KpiCard/KpiCard'
import { Badge, Button, Columns, PageHeader } from '../../components/ui'
import {
  aggregateActivity,
  overviewHeading,
  overviewMetrics,
  type OverviewMetricIcon,
} from '../../mocks/organizer'
import { ConfirmationPipeline } from './components/ConfirmationPipeline/ConfirmationPipeline'
import { InfluenceBreakdown } from './components/InfluenceBreakdown/InfluenceBreakdown'
import { SpeakerRankings } from './components/SpeakerRankings/SpeakerRankings'
import { TopCandidates } from './components/TopCandidates/TopCandidates'
import { TopicCloud } from './components/TopicCloud/TopicCloud'

const metricIcons: Record<OverviewMetricIcon, string> = {
  speakers: usersIcon,
  nps: starIcon,
  rising: trendingUpIcon,
  confirmation: badgeCheckIcon,
}

export function OrganizerOverviewPage() {
  return (
    <AppLayout role="organizer" activeNavigationId="overview">
      <PageHeader
        eyebrow={overviewHeading.eyebrow}
        title={overviewHeading.title}
        description={overviewHeading.description}
        actions={
          <>
            <Button
              variant="secondary"
              iconLeft={<img src={downloadIcon} width={15} height={15} alt="" />}
            >
              Экспорт отчёта
            </Button>
            <Button iconLeft={<img src={listPlusIcon} width={15} height={15} alt="" />}>
              Создать шорт-лист
            </Button>
          </>
        }
      />

      <Columns widths={overviewMetrics.map(() => 1)} gap="md">
        {overviewMetrics.map(({ id, icon, ...metric }) => (
          <KpiCard key={id} icon={metricIcons[icon]} {...metric} />
        ))}
      </Columns>

      <Columns widths={[746, 368]} rowHeight={304}>
        <BarChart
          title="Общая активность спикеров"
          description="Доклады, лекции и оценки · последние 12 месяцев"
          action={<Badge>+21% за год</Badge>}
          data={aggregateActivity}
          barMaxHeight={164}
        />
        <InfluenceBreakdown />
      </Columns>

      <Columns widths={[674, 440]}>
        <TopCandidates />
        <SpeakerRankings />
      </Columns>

      <Columns widths={[746, 368]}>
        <TopicCloud />
        <ConfirmationPipeline />
      </Columns>
    </AppLayout>
  )
}
