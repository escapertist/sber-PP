import eyeIcon from '../../assets/icons/eye.svg'
import pencilIcon from '../../assets/icons/pencil-inverse.svg'
import { AppLayout } from '../../components/AppLayout/AppLayout'
import {
  BadgeList,
  Button,
  Columns,
  PageHeader,
  Panel,
  SectionHeader,
} from '../../components/ui'
import { profileHeading, speakingTopics } from '../../mocks/speakerProfile'
import { IdentityCard } from './components/IdentityCard/IdentityCard'
import { ProfileTalks } from './components/ProfileTalks/ProfileTalks'

export function SpeakerProfilePage() {
  return (
    <AppLayout role="speaker" activeNavigationId="profile">
      <PageHeader
        breadcrumb={profileHeading.breadcrumb}
        title={profileHeading.title}
        actions={
          <>
            <Button
              variant="secondary"
              iconLeft={<img src={eyeIcon} width={15} height={15} alt="" />}
            >
              Предпросмотр профиля
            </Button>
            <Button iconLeft={<img src={pencilIcon} width={15} height={15} alt="" />}>
              Редактировать профиль
            </Button>
          </>
        }
      />

      <Columns widths={[900, 316]} stretch>
        <IdentityCard />
          <Panel aria-labelledby="speaking-topics-title">
              <SectionHeader
                  titleId="speaking-topics-title"
                  title="Темы выступлений"
                  action={<Button variant="ghost">Изменить</Button>}
              />
              <BadgeList items={speakingTopics} aria-label="Темы выступлений" />
          </Panel>
      </Columns>

        <ProfileTalks />
    </AppLayout>
  )
}
