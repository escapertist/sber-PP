import arrowRightIcon from '../../../../assets/icons/arrow-right-dark.svg'
import { Button, MiniStat, Panel, SectionHeader } from '../../../../components/ui'
import { confirmationPipeline } from '../../../../mocks/organizer'
import styles from './ConfirmationPipeline.module.scss'

export function ConfirmationPipeline() {
  return (
    <Panel aria-labelledby="confirmation-pipeline-title">
      <SectionHeader
        titleId="confirmation-pipeline-title"
        title="Воронка подтверждений"
        description="Открытые приглашения на ближайшие 60 дней"
      />

      <dl className={styles.metrics}>
        {confirmationPipeline.map((stage) => (
          <MiniStat
            key={stage.id}
            size="lg"
            value={stage.value}
            label={stage.label}
            highlighted={stage.highlighted}
          />
        ))}
      </dl>

      <div>
        <Button
          variant="secondary"
          iconLeft={<img src={arrowRightIcon} width={15} height={15} alt="" />}
        >
          Проверить ожидающие приглашения
        </Button>
      </div>
    </Panel>
  )
}
