import plusIcon from '../../../../assets/icons/plus.svg'
import uploadCloudIcon from '../../../../assets/icons/upload-cloud.svg'
import xIcon from '../../../../assets/icons/x.svg'
import {
  Button,
  Columns,
  IconButton,
  IconTile,
  Panel,
  SectionHeader,
  Select,
  Switch,
} from '../../../../components/ui'
import { addLectureForm } from '../../../../mocks/media'
import styles from './AddLecturePanel.module.scss'

export function AddLecturePanel() {
  return (
    <Panel padding="lg" className={styles.root} aria-labelledby="add-lecture-title">
      <SectionHeader
        titleId="add-lecture-title"
        title="Добавить лекцию"
        description="Свяжите доклад с выступлением на событии и загрузите материалы."
        action={
          <IconButton icon={xIcon} iconSize={18} label="Закрыть панель" bordered={false} />
        }
      />

      <form className={styles.form}>
        <Select label="Доклад" name="talk" options={addLectureForm.talks} />
        <Select label="Название события" name="event" options={addLectureForm.events} />
        <Columns widths={[1, 1]} gap="sm">
          <Select label="Дата лекции" name="date" options={addLectureForm.dates} />
          <Select label="Тип события" name="eventType" options={addLectureForm.eventTypes} />
        </Columns>

        <label className={styles.uploader}>
          <input type="file" accept=".pdf,.pptx" className={styles.fileInput} />
          <IconTile icon={uploadCloudIcon} iconSize={16} tone="white" round />
          <span className={styles.uploaderTitle}>Перетащите PDF или PPTX сюда</span>
          <span className={styles.uploaderHint}>До 50 МБ · необязательно</span>
        </label>

        <div className={styles.visibility}>
          <Switch
            name="visibleToOrganizers"
            defaultChecked
            label="Видно организаторам"
            description="Организаторы могут просматривать и скачивать одобренные материалы."
          />
        </div>

        <div className={styles.actions}>
          <Button variant="secondary" type="reset">
            Отмена
          </Button>
          <Button type="submit" iconLeft={<img src={plusIcon} width={15} height={15} alt="" />}>
            Добавить лекцию
          </Button>
        </div>
      </form>
    </Panel>
  )
}
