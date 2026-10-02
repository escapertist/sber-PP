// Mock data for the talks catalog and talk detail pages. Replace with API calls once the backend is ready.

import type { BadgeTone, SelectOption } from '../components/ui'

export type TalkStatus = 'published' | 'draft' | 'archived'
export type ConferenceType = 'conference' | 'meetup' | 'webinar' | 'internal' | 'workshop'

export const talkStatuses: Record<TalkStatus, { label: string; tone: BadgeTone }> = {
  published: { label: 'Опубликован', tone: 'brand' },
  draft: { label: 'Черновик', tone: 'warning' },
  archived: { label: 'В архиве', tone: 'neutral' },
}

export const conferenceTypes: Record<ConferenceType, string> = {
  conference: 'Конференция',
  meetup: 'Митап',
  webinar: 'Вебинар',
  internal: 'Внутреннее',
  workshop: 'Воркшоп',
}

export interface Talk {
  id: string
  title: string
  topics: string
  conferenceType: ConferenceType
  format: string
  updatedAt: string
  lecturesCount: number
  status: TalkStatus
}

export const talks: Talk[] = [
  {
    id: 'resilient-java-apis',
    title: 'Проектирование отказоустойчивых Java API',
    topics: 'Java · Архитектура',
    conferenceType: 'conference',
    format: 'Доклад 45 мин',
    updatedAt: '24 сент. 2026',
    lecturesCount: 4,
    status: 'published',
  },
  {
    id: 'monolith-to-modular-platform',
    title: 'От монолита к модульной платформе',
    topics: 'Platform engineering',
    conferenceType: 'conference',
    format: 'Кейноут',
    updatedAt: '18 сент. 2026',
    lecturesCount: 3,
    status: 'published',
  },
  {
    id: 'observability-developers-trust',
    title: 'Observability, которой доверяют разработчики',
    topics: 'Developer experience',
    conferenceType: 'meetup',
    format: 'Воркшоп',
    updatedAt: '12 сент. 2026',
    lecturesCount: 1,
    status: 'draft',
  },
  {
    id: 'spring-boot-beyond-defaults',
    title: 'Spring Boot за пределами настроек по умолчанию',
    topics: 'Java · Spring Boot',
    conferenceType: 'webinar',
    format: 'Доклад 60 мин',
    updatedAt: '30 авг. 2026',
    lecturesCount: 5,
    status: 'published',
  },
  {
    id: 'human-side-of-migrations',
    title: 'Человеческая сторона миграций',
    topics: 'Лидерство · Архитектура',
    conferenceType: 'internal',
    format: 'Доклад 30 мин',
    updatedAt: '15 авг. 2026',
    lecturesCount: 0,
    status: 'archived',
  },
]

/* ---------- Catalog ---------- */

export const catalogHeading = {
  breadcrumb: { section: 'Спикер / Доклады', current: 'Каталог докладов' },
  title: 'Каталог докладов',
  description:
    'Создавайте, упорядочивайте и переиспользуйте доклады для конференций и сообществ.',
}

export const catalogSummary = [
  { id: 'all', value: 18, label: 'Все доклады', selected: true },
  { id: 'published', value: 12, label: 'Опубликованы', selected: false },
  { id: 'drafts', value: 4, label: 'Черновики', selected: false },
  { id: 'archived', value: 2, label: 'В архиве', selected: false },
]

export const catalogFilters = {
  conferenceTypes: [
    { value: 'all', label: 'Все типы конференций' },
    ...Object.entries(conferenceTypes).map(([value, label]) => ({ value, label })),
  ] satisfies SelectOption[],
  statuses: [
    { value: 'all', label: 'Любой статус' },
    ...Object.entries(talkStatuses).map(([value, { label }]) => ({ value, label })),
  ] satisfies SelectOption[],
  sorting: [
    { value: 'updated', label: 'Недавно изменённые' },
    { value: 'title', label: 'По названию' },
    { value: 'lectures', label: 'По числу лекций' },
  ] satisfies SelectOption[],
  quickFilters: [
    { id: 'conference', label: 'Конференция', selected: true },
    { id: 'meetup', label: 'Митап' },
    { id: 'webinar', label: 'Вебинар' },
    { id: 'internal', label: 'Внутреннее' },
    { id: 'workshop', label: 'Воркшоп' },
  ],
}

export const catalogPagination = {
  summary: 'Показаны 1–5 из 18 докладов',
  resultCount: '5 из 18 докладов',
  pageCount: 3,
  currentPage: 1,
}

/* ---------- Talk detail ---------- */

export const talkDetail = {
  talk: talks[0],
  description:
    'Практическое руководство по контрактам, сценариям отказов и эволюции границ сервисов.',
  tags: [
    { id: 'status', label: 'Опубликован', tone: 'brand' },
    { id: 'java', label: 'Java', tone: 'brand' },
    { id: 'architecture', label: 'Архитектура ПО', tone: 'neutral' },
    { id: 'edited', label: 'Изменён 24 сент.', tone: 'neutral' },
  ] satisfies { id: string; label: string; tone: BadgeTone }[],
  editor: {
    topics: [
      { value: 'architecture', label: 'Архитектура ПО' },
      { value: 'java', label: 'Java' },
      { value: 'platform', label: 'Platform engineering' },
    ] satisfies SelectOption[],
    formats: [
      { value: '45', label: 'Доклад 45 мин' },
      { value: '30', label: 'Доклад 30 мин' },
      { value: '60', label: 'Доклад 60 мин' },
      { value: 'keynote', label: 'Кейноут' },
      { value: 'workshop', label: 'Воркшоп' },
    ] satisfies SelectOption[],
    abstract:
      'API в продакшене ломаются так, как редко предсказывают проекты «счастливого пути». В докладе — конкретные паттерны стабильных контрактов, мягкой деградации и безопасной эволюции, собранные на опыте эксплуатации Java-сервисов в сотнях инженерных команд.',
  },
  lectures: [
    {
      id: 'devoxx-be-2026',
      event: 'Devoxx Belgium 2026',
      details: '8 окт. 2026 · Антверпен',
      status: 'Презентация готова',
    },
    {
      id: 'jcon-2026',
      event: 'JCON Europe 2026',
      details: '13 июн. 2026 · Кёльн',
      status: 'Запись добавлена',
    },
    {
      id: 'berlin-jug-2026',
      event: 'Berlin Java User Group',
      details: '19 мар. 2026 · Берлин',
      status: 'Слайды добавлены',
    },
    {
      id: 'platform-summit-2025',
      event: 'Internal Platform Summit',
      details: '7 нояб. 2025 · Онлайн',
      status: 'Завершено',
    },
  ],
  details: [
    { id: 'speaker', icon: 'speaker', label: 'Спикер', value: 'Алекс Ким' },
    { id: 'type', icon: 'type', label: 'Тип конференции', value: 'Конференция' },
    { id: 'format', icon: 'format', label: 'Формат', value: 'Доклад 45 минут' },
    { id: 'created', icon: 'created', label: 'Создан', value: '18 февраля 2025' },
    { id: 'updated', icon: 'updated', label: 'Обновлён', value: '24 сентября 2026' },
  ] as const,
  speaker: {
    name: 'Алекс Ким',
    initials: 'АК',
    position: 'Staff Platform Engineer · Acme',
    metrics: [
      { id: 'nps', value: '74', label: 'NPS' },
      { id: 'audience', value: '8,4 тыс.', label: 'Аудитория' },
      { id: 'talks', value: '18', label: 'Доклады' },
    ],
  },
  activity: [
    { id: 'presentation', title: 'Загружена презентация', time: '2 часа назад' },
    { id: 'abstract', title: 'Обновлена аннотация', time: '4 дня назад' },
    { id: 'lecture', title: 'Привязана лекция', time: '12 сент. 2026' },
    { id: 'published', title: 'Доклад опубликован', time: '21 февр. 2025' },
  ],
}
