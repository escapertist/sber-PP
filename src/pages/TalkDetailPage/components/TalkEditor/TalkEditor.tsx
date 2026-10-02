import checkIcon from '../../../../assets/icons/check-inverse.svg'
import {
  Button,
  Columns,
  Input,
  Panel,
  SectionHeader,
  Select,
  Textarea,
} from '../../../../components/ui'
import { catalogFilters, talkDetail } from '../../../../mocks/talks'
import styles from './TalkEditor.module.scss'

export function TalkEditor() {
  const { talk, editor } = talkDetail

  return (
    <Panel padding="lg" gap="lg" aria-labelledby="talk-editor-title">
      <SectionHeader
        titleId="talk-editor-title"
        title="Информация о докладе"
        description="Публичные данные, которые показываются в профиле и связанных лекциях"
      />

      <form className={styles.form}>
        <Input label="Название доклада" name="title" defaultValue={talk.title} />

        <Columns widths={[1, 1, 1]} gap="sm">
          <Select label="Основная тема" name="topic" options={editor.topics} />
          <Select
            label="Тип конференции"
            name="conferenceType"
            options={catalogFilters.conferenceTypes.slice(1)}
          />
          <Select label="Формат" name="format" options={editor.formats} />
        </Columns>

        <Textarea label="Аннотация" name="abstract" defaultValue={editor.abstract} rows={4} />

        <div className={styles.footer}>
          <p className={styles.note}>Изменения не сохраняются автоматически</p>
          <div className={styles.actions}>
            <Button variant="secondary" type="reset">
              Отмена
            </Button>
            <Button type="submit" iconLeft={<img src={checkIcon} width={15} height={15} alt="" />}>
              Сохранить изменения
            </Button>
          </div>
        </div>
      </form>
    </Panel>
  )
}
