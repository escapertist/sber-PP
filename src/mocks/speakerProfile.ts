// Mock data for the speaker profile page. Replace with API calls once the backend is ready.

import type { BadgeListItem } from '../components/ui'
import type { TalkStatus } from './talks'

export type ProfileFactIcon = 'mail' | 'website' | 'languages'
export type ProfileActivityIcon = 'upload' | 'star' | 'pencil' | 'award'

export const profileHeading = {
  breadcrumb: { section: 'Спикер / Профиль', current: 'Мой профиль' },
  title: 'Мой профиль',
  description:
    'Поддерживайте публичный профиль спикера актуальным и готовым к проверке организаторами.',
}

export const profileIdentity = {
  name: 'Иван Иванов',
  initials: 'ИИ',
  headline: 'Senior Java Developer в Сбере · Екатеринбург, Россия',
  statuses: [
    { id: 'available', label: 'Открыт к выступлениям', tone: 'brand' },
    { id: 'travel', label: 'Готов к поездкам', tone: 'neutral' },
  ] satisfies BadgeListItem[],
  bio: 'описание себя',
  facts: [
    { id: 'email', icon: 'mail', label: 'test@mock.com' },
    { id: 'website', icon: 'website', label: 'test.ru' },
  ] satisfies { id: string; icon: ProfileFactIcon; label: string }[],
}

export const profileCompletion = {
  score: 86,
  status: 'Почти готово',
  tasks: [
    { id: 'headline', label: 'Добавить профессиональный заголовок', done: true },
    { id: 'topics', label: 'Указать основные темы выступлений', done: true },
    { id: 'headshot', label: 'Загрузить свежее фото', done: false },
    { id: 'testimonial', label: 'Добавить отзыв слушателей', done: false },
  ],
}

export const accountRoles = [
  { id: 'speaker', role: 'speaker', title: 'Спикер', meta: 'Основная · Активна', primary: true },
  { id: 'reviewer', role: 'organizer', title: 'Ревьюер DevRel', meta: 'Выдана Acme', primary: false },
] as const

export const speakingTopics: BadgeListItem[] = [
  { id: 'java', label: 'Java', tone: 'brand' },
  { id: 'spring-boot', label: 'Spring Boot', tone: 'brand' },
  { id: 'platform', label: 'Platform engineering', tone: 'neutral' },
  { id: 'cloud-native', label: 'Cloud native', tone: 'neutral' },
  { id: 'architecture', label: 'Архитектура ПО', tone: 'neutral' },
  { id: 'dx', label: 'Developer experience', tone: 'neutral' },
  { id: 'devops', label: 'DevOps', tone: 'neutral' },
]

export const profileTalks = {
  summary: '3 доклада',
  items: [
    {
      id: 'test',
      title: 'Доклад 1',
      meta: 'Конференция',
      status: 'published',
    },
    {
      id: 'test2',
      title: 'Доклад 2',
      meta: 'Конференция',
      status: 'published',
    },
    {
      id: 'test3',
      title: 'Доклад 3',
      meta: 'Конференция',
      status: 'published',
    },
  ] satisfies { id: string; title: string; meta: string; status: TalkStatus }[],
}

export const profileActivity = [
  {
    id: 'slides',
    icon: 'upload',
    title: 'Загружены слайды',
    meta: 'Отказоустойчивые Java API · 2 ч назад',
  },
  { id: 'nps', icon: 'star', title: 'Новая оценка NPS', meta: 'Devoxx Belgium · 2 дня назад' },
  { id: 'talk', icon: 'pencil', title: 'Доклад обновлён', meta: 'Модульная платформа · 5 дней назад' },
  {
    id: 'achievement',
    icon: 'award',
    title: 'Новое достижение',
    meta: 'Любимец публики · 1 нед. назад',
  },
] satisfies { id: string; icon: ProfileActivityIcon; title: string; meta: string }[]
