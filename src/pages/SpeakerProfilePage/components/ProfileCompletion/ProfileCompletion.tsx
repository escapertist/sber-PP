import checkIcon from '../../../../assets/icons/check-sm.svg'
import circleIcon from '../../../../assets/icons/circle.svg'
import { Badge, Panel, ProgressBar, SectionHeader, VisuallyHidden } from '../../../../components/ui'
import { profileCompletion } from '../../../../mocks/speakerProfile'
import { cx } from '../../../../utils/cx'
import styles from './ProfileCompletion.module.scss'

export function ProfileCompletion() {
  const { score, status, tasks } = profileCompletion

  return (
    <Panel padding="lg" className={styles.root} aria-labelledby="profile-completion-title">
      <SectionHeader
        titleId="profile-completion-title"
        title="Заполненность профиля"
        description="Полные профили получают в 2,4 раза больше просмотров организаторов"
      />

      <div className={styles.score}>
        <span className={styles.scoreValue}>{score}%</span>
        <Badge>{status}</Badge>
      </div>

      <ProgressBar value={score} label="Заполненность профиля" />

      <ul className={styles.tasks}>
        {tasks.map((task) => (
          <li key={task.id} className={cx(styles.task, task.done && styles.taskDone)}>
            <img src={task.done ? checkIcon : circleIcon} width={15} height={15} alt="" />
            <span>
              {task.label}
              {task.done && <VisuallyHidden> — выполнено</VisuallyHidden>}
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  )
}
