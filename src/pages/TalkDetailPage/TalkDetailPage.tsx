import building2Icon from '../../assets/icons/building-2.svg'
import calendarPlusIcon from '../../assets/icons/calendar-plus.svg'
import clock3Icon from '../../assets/icons/clock-3.svg'
import pencilIcon from '../../assets/icons/pencil-inverse.svg'
import refreshCwIcon from '../../assets/icons/refresh-cw.svg'
import trashIcon from '../../assets/icons/trash-2.svg'
import userRoundIcon from '../../assets/icons/user-round-sm.svg'
import { AppLayout } from '../../components/AppLayout/AppLayout'
import { DetailList } from '../../components/DetailList/DetailList'
import {
  BadgeList,
  Button,
  Columns,
  PageHeader,
  Panel,
  SectionHeader,
  Stack,
} from '../../components/ui'
import { talkDetail } from '../../mocks/talks'
import { ActivityTimeline } from './components/ActivityTimeline/ActivityTimeline'
import { DangerZone } from './components/DangerZone/DangerZone'
import { LinkedLectures } from './components/LinkedLectures/LinkedLectures'
import { SpeakerCard } from './components/SpeakerCard/SpeakerCard'
import { TalkEditor } from './components/TalkEditor/TalkEditor'

const detailIcons: Record<(typeof talkDetail.details)[number]['icon'], string> = {
  speaker: userRoundIcon,
  type: building2Icon,
  format: clock3Icon,
  created: calendarPlusIcon,
  updated: refreshCwIcon,
}

export function TalkDetailPage() {
  const { talk, description, tags, details } = talkDetail

  return (
    <AppLayout role="speaker" activeNavigationId="talks">
      <PageHeader
        breadcrumb={{ section: 'Спикер / Доклады', current: talk.title }}
        title={talk.title}
        description={description}
        actions={
          <>
            <Button
              variant="danger"
              iconLeft={<img src={trashIcon} width={15} height={15} alt="" />}
            >
              Удалить
            </Button>
            <Button iconLeft={<img src={pencilIcon} width={15} height={15} alt="" />}>
              Редактировать
            </Button>
          </>
        }
      />

      <BadgeList items={tags} aria-label="Статус и темы" />

      <Columns widths={[750, 364]}>
        <Stack>
          <TalkEditor />
          <LinkedLectures />
        </Stack>

        <Stack>
          <Panel aria-labelledby="talk-details-title">
            <SectionHeader titleId="talk-details-title" title="Детали" />
            <DetailList
              items={details.map((item) => ({ ...item, icon: detailIcons[item.icon] }))}
            />
          </Panel>
          <SpeakerCard />
          <ActivityTimeline />
          <DangerZone />
        </Stack>
      </Columns>
    </AppLayout>
  )
}
