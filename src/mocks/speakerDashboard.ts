// Mock data for the speaker dashboard. Replace with API calls once the backend is ready.

import type { BarChartDatum } from '../components/BarChart/BarChart'

export type MetricIcon = 'talks' | 'nps' | 'audience' | 'topics' | 'recommendations'
export type MetricTone = 'brand' | 'info' | 'accent' | 'warning'
export type AchievementIcon = 'award' | 'flame'

export interface Metric {
  id: string
  icon: MetricIcon
  tone: MetricTone
  label: string
  value: string
  change: string
  /** Positive changes are highlighted with the brand color. */
  positive: boolean
}

export interface Topic {
  id: string
  name: string
  talksCount: number
  /** Meter fill, 0–100. */
  share: number
}

export interface CfpOpportunity {
  id: string
  day: string
  month: string
  title: string
  details: string
  match: number
  href: string
}

export interface Achievement {
  id: string
  icon: AchievementIcon
  tone: Extract<MetricTone, 'accent' | 'warning'>
  title: string
  description: string
}

export const dashboardHeading = {
  date: 'Понедельник, 28 сентября',
  greeting: 'Доброе утро, Иван',
}

export const metrics: Metric[] = [
  {
    id: 'talks',
    icon: 'talks',
    tone: 'brand',
    label: 'Метрика 1',
    value: '18',
    change: '+2 за квартал',
    positive: true,
  },
  {
    id: 'nps',
    icon: 'nps',
    tone: 'brand',
    label: 'Метрика 2',
    value: '74',
    change: '+6 к прошлому кварталу',
    positive: true,
  },
  {
    id: 'audience',
    icon: 'audience',
    tone: 'info',
    label: 'Метрика 3',
    value: '8,4 тыс.',
    change: '+18,2% за год',
    positive: true,
  },
  {
    id: 'topics',
    icon: 'topics',
    tone: 'accent',
    label: 'Метрика 4',
    value: '5',
    change: '2 в тренде',
    positive: false,
  },
  {
    id: 'recommendations',
    icon: 'recommendations',
    tone: 'warning',
    label: 'Метрика 5',
    value: '7',
    change: '3 новых CFP',
    positive: false,
  },
]

export const speakingActivity: BarChartDatum[] = [
  { id: '2025-10', label: 'О', value: 420, highlighted: false },
  { id: '2025-11', label: 'Н', value: 580, highlighted: false },
  { id: '2025-12', label: 'Д', value: 490, highlighted: false },
  { id: '2026-01', label: 'Я', value: 720, highlighted: false },
  { id: '2026-02', label: 'Ф', value: 660, highlighted: false },
  { id: '2026-03', label: 'М', value: 840, highlighted: false },
  { id: '2026-04', label: 'А', value: 760, highlighted: false },
  { id: '2026-05', label: 'М', value: 930, highlighted: false },
  { id: '2026-06', label: 'И', value: 880, highlighted: false },
  { id: '2026-07', label: 'И', value: 1040, highlighted: true },
  { id: '2026-08', label: 'А', value: 960, highlighted: true },
  { id: '2026-09', label: 'С', value: 1180, highlighted: true },
]

export const topics: Topic[] = [
  { id: 'java', name: 'Java', talksCount: 12, share: 65 },
  { id: 'spring-boot', name: 'Spring Boot', talksCount: 9, share: 49 },
  { id: 'cloud-native', name: 'Cloud native', talksCount: 8, share: 44 },
  { id: 'architecture', name: 'Архитектура', talksCount: 7, share: 38 },
  { id: 'kotlin', name: 'Kotlin', talksCount: 4, share: 22 },
]

export const cfpOpportunities: CfpOpportunity[] = [
  {
    id: 'jfokus-2027',
    day: '12',
    month: 'окт',
    title: 'Современная Java в масштабе',
    details: 'Jfokus 2027 · Стокгольм · Конференция',
    match: 96,
    href: '#cfp-jfokus-2027',
  },
  {
    id: 'devoxx-uk-2027',
    day: '18',
    month: 'окт',
    title: 'Истории cloud-native архитектуры',
    details: 'Devoxx UK 2027 · Лондон · Конференция',
    match: 91,
    href: '#cfp-devoxx-uk-2027',
  },
  {
    id: 'kubecon-eu',
    day: '02',
    month: 'ноя',
    title: 'Практический platform engineering',
    details: 'KubeCon EU · Амстердам · Саммит',
    match: 86,
    href: '#cfp-kubecon-eu',
  },
]

export const cfpTotalCount = 7

export const achievements: Achievement[] = [
  {
    id: 'audience-favorite',
    icon: 'award',
    tone: 'warning',
    title: 'Любимец публики',
    description: 'NPS выше 70 у трёх докладов',
  },
  {
    id: 'on-a-roll',
    icon: 'flame',
    tone: 'accent',
    title: 'В ударе',
    description: '6 месяцев стабильной активности',
  },
]

export const nextMilestone = {
  title: 'Далее: наставник сообщества',
  description: 'Ещё 2 рекомендации от коллег',
  /** Progress, 0–100. */
  progress: 44,
}
