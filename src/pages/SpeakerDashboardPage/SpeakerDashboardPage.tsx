import plusIcon from '../../assets/icons/plus.svg'
import presentationIcon from '../../assets/icons/presentation-brand.svg'
import sparklesIcon from '../../assets/icons/sparkles.svg'
import tagsIcon from '../../assets/icons/tags.svg'
import trendingUpIcon from '../../assets/icons/trending-up.svg'
import usersIcon from '../../assets/icons/users-info.svg'
import { AppLayout } from '../../components/AppLayout/AppLayout'
import { BarChart } from '../../components/BarChart/BarChart'
import { KpiCard } from '../../components/KpiCard/KpiCard'
import { Button, Columns, PageHeader } from '../../components/ui'
import {
  cfpOpportunities,
  cfpTotalCount,
  dashboardHeading,
  metrics,
  speakingActivity,
  topics,
  type MetricIcon,
} from '../../mocks/speakerDashboard'
import { CfpOpportunities } from './components/CfpOpportunities/CfpOpportunities'
import { TopicPortfolio } from './components/TopicPortfolio/TopicPortfolio'

const metricIcons: Record<MetricIcon, string> = {
  talks: presentationIcon,
  nps: trendingUpIcon,
  audience: usersIcon,
  topics: tagsIcon,
  recommendations: sparklesIcon,
}

export function SpeakerDashboardPage() {
  return (
    <AppLayout role="speaker" activeNavigationId="dashboard">
      <PageHeader
        title={dashboardHeading.greeting}
        actions={
          <Button iconLeft={<img src={plusIcon} width={15} height={15} alt="" />}>
            Добавить доклад
          </Button>
        }
      />

      <Columns widths={metrics.map(() => 1)} gap="md">
        {metrics.map(({ id, icon, ...metric }) => (
          <KpiCard key={id} icon={metricIcons[icon]} {...metric} />
        ))}
      </Columns>

      <Columns widths={[720, 394]} rowHeight={308}>
        <BarChart
          title="Активность выступлений"
          description="за последние 12 месяцев"
          legend="Взаимодействия"
          data={speakingActivity}
          barMaxHeight={118}
        />
        <TopicPortfolio topics={topics} />
      </Columns>

        <CfpOpportunities opportunities={cfpOpportunities} totalCount={cfpTotalCount} />
        {/*<Achievements achievements={achievements} nextMilestone={nextMilestone} />*/}
    </AppLayout>
  )
}
