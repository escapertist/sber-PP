import trashIcon from '../../../../assets/icons/trash-2.svg'
import { Button } from '../../../../components/ui'
import styles from './DangerZone.module.scss'

export function DangerZone() {
  return (
    <section className={styles.root} aria-labelledby="talk-danger-title">
      <h2 id="talk-danger-title" className={styles.title}>
        Удалить этот доклад
      </h2>
      <p className={styles.description}>
        Связанные лекции останутся в вашей истории, но сам доклад восстановить не получится.
      </p>
      <div>
        <Button variant="danger" iconLeft={<img src={trashIcon} width={15} height={15} alt="" />}>
          Удалить доклад…
        </Button>
      </div>
    </section>
  )
}
