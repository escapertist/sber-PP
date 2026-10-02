// Mock data for the lectures & media page. Replace with API calls once the backend is ready.

import type { BadgeTone, SelectOption } from '../components/ui'

export type MediaMetricIcon = 'lectures' | 'ready' | 'processing' | 'missing'
export type FileStatus = 'ready' | 'processing' | 'missing'

export const fileStatuses: Record<FileStatus, { label: string; tone: BadgeTone }> = {
  ready: { label: 'Готово', tone: 'brand' },
  processing: { label: 'Обработка', tone: 'info' },
  missing: { label: 'Нет файла', tone: 'warning' },
}

export const mediaHeading = {
  breadcrumb: { section: 'Спикер / Лекции и медиа', current: 'Лекции и медиа' },
  title: 'Лекции и медиа',
  description:
    'Отслеживайте выступления на событиях и держите файлы презентаций готовыми к проверке.',
}

export const mediaSummary = [
  { id: 'lectures', icon: 'lectures', value: 24, label: 'Всего лекций' },
  { id: 'ready', icon: 'ready', value: 18, label: 'Презентации готовы' },
  { id: 'processing', icon: 'processing', value: 2, label: 'В обработке' },
  { id: 'missing', icon: 'missing', value: 4, label: 'Без файлов' },
] satisfies { id: string; icon: MediaMetricIcon; value: number; label: string }[]

export const fileStatusFilter: SelectOption[] = [
  { value: 'all', label: 'Все статусы файлов' },
  ...Object.entries(fileStatuses).map(([value, { label }]) => ({ value, label })),
]

export interface Lecture {
  id: string
  event: string
  talk: string
  date: string
  // fileName: string | null
  // status: FileStatus
}

export const lectures: Lecture[] = [
  {
    id: 'devoxx-be-2026',
    event: 'Devoxx Belgium 2026',
    talk: 'Проектирование отказоустойчивых Java API',
    date: '8 окт. 2026',
  },
  {
    id: 'jcon-2026',
    event: 'JCON Europe 2026',
    talk: 'Проектирование отказоустойчивых Java API',
    date: '13 июн. 2026',
  },
  {
    id: 'berlin-jug-2026',
    event: 'Berlin Java User Group',
    talk: 'Spring Boot за пределами настроек по умолчанию',
    date: '19 мар. 2026',
  },
  {
    id: 'kubecon-eu-2026',
    event: 'KubeCon EU 2026',
    talk: 'От монолита к модульной платформе',
    date: '4 мар. 2026',
  },
]

export const addLectureForm = {
  talks: [
    { value: 'resilient-java-apis', label: 'Проектирование отказоустойчивых Java API' },
    { value: 'monolith-to-modular-platform', label: 'От монолита к модульной платформе' },
    { value: 'spring-boot-beyond-defaults', label: 'Spring Boot за пределами настроек по умолчанию' },
  ] satisfies SelectOption[],
  events: [
    { value: 'voxxed-ams-2026', label: 'Voxxed Days Amsterdam 2026' },
    { value: 'devoxx-uk-2027', label: 'Devoxx UK 2027' },
  ] satisfies SelectOption[],
  dates: [
    { value: '2026-11-12', label: '12 нояб. 2026' },
    { value: '2026-11-13', label: '13 нояб. 2026' },
  ] satisfies SelectOption[],
  eventTypes: [
    { value: 'conference', label: 'Конференция' },
    { value: 'meetup', label: 'Митап' },
    { value: 'webinar', label: 'Вебинар' },
  ] satisfies SelectOption[],
}
