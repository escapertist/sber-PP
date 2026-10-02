// Mock data for the organizer workspace. Replace with API calls once the backend is ready.

import type { BarChartDatum } from '../components/BarChart/BarChart'
import type { AvatarTone, BadgeTone, IconTileTone, SelectOption } from '../components/ui'

/* ---------- Speakers (shared by overview and directory) ---------- */

export type Influence = 'high' | 'medium'
export type CandidateSignal = 'top' | 'shortlisted' | 'rising' | 'reviewed' | 'new'

export const influenceLevels: Record<Influence, { label: string; tone: BadgeTone }> = {
  high: { label: 'Высокое', tone: 'brand' },
  medium: { label: 'Среднее', tone: 'neutral' },
}

export const candidateSignals: Record<CandidateSignal, { label: string; tone: BadgeTone }> = {
  top: { label: 'Топ-кандидат', tone: 'brand' },
  shortlisted: { label: 'В шорт-листе', tone: 'neutral' },
  rising: { label: 'Растущий', tone: 'accent' },
  reviewed: { label: 'Просмотрен', tone: 'neutral' },
  new: { label: 'Новый', tone: 'info' },
}

export interface Speaker {
  id: string
  name: string
  initials: string
  avatarTone: AvatarTone
  position: string
  expertise: string
  region: string
  nps: number | null
  influence: Influence
  signal: CandidateSignal
  verified: boolean
  shortlisted: boolean
}

export const speakers: Speaker[] = [
  {
    id: 'maya-patel',
    name: 'Майя Патель',
    initials: 'МП',
    avatarTone: 'brand',
    position: 'Principal Engineer · Stripe',
    expertise: 'Java · Распределённые системы',
    region: 'Лондон, Великобритания',
    nps: 82,
    influence: 'high',
    signal: 'top',
    verified: true,
    shortlisted: true,
  },
  {
    id: 'jonas-richter',
    name: 'Йонас Рихтер',
    initials: 'ЙР',
    avatarTone: 'accent',
    position: 'Staff Engineer · Zalando',
    expertise: 'Platform · Kubernetes',
    region: 'Берлин, Германия',
    nps: 78,
    influence: 'high',
    signal: 'shortlisted',
    verified: true,
    shortlisted: true,
  },
  {
    id: 'sofia-alvarez',
    name: 'София Альварес',
    initials: 'СА',
    avatarTone: 'brand',
    position: 'Developer Advocate · Red Hat',
    expertise: 'Quarkus · Cloud native',
    region: 'Мадрид, Испания',
    nps: 75,
    influence: 'medium',
    signal: 'rising',
    verified: true,
    shortlisted: false,
  },
  {
    id: 'chris-okafor',
    name: 'Крис Окафор',
    initials: 'КО',
    avatarTone: 'brand',
    position: 'Engineering Manager · Elastic',
    expertise: 'Observability · Лидерство',
    region: 'Амстердам, Нидерланды',
    nps: 71,
    influence: 'high',
    signal: 'reviewed',
    verified: false,
    shortlisted: false,
  },
  {
    id: 'nina-chen',
    name: 'Нина Чен',
    initials: 'НЧ',
    avatarTone: 'accent',
    position: 'Senior Engineer · Shopify',
    expertise: 'Java · Производительность',
    region: 'Торонто, Канада',
    nps: null,
    influence: 'medium',
    signal: 'new',
    verified: false,
    shortlisted: false,
  },
  {
    id: 'omar-haddad',
    name: 'Омар Хаддад',
    initials: 'ОХ',
    avatarTone: 'brand',
    position: 'Solutions Architect · AWS',
    expertise: 'Cloud · Архитектура',
    region: 'Париж, Франция',
    nps: 68,
    influence: 'medium',
    signal: 'reviewed',
    verified: false,
    shortlisted: false,
  },
]

const speakerById = (id: string) => speakers.find((speaker) => speaker.id === id)!

/* ---------- Overview ---------- */

export type OverviewMetricIcon = 'speakers' | 'nps' | 'rising' | 'confirmation'

export const overviewHeading = {
  eyebrow: 'Аналитика организатора',
  title: 'Обзор сообщества',
  description: 'Состояние спикеров, динамика и лучшие кандидаты — в одном месте.',
}

export const overviewMetrics = [
  {
    id: 'speakers',
    icon: 'speakers',
    tone: 'brand',
    label: 'Активные спикеры',
    value: '248',
    change: '+18 за квартал',
    positive: true,
  },
  {
    id: 'nps',
    icon: 'nps',
    tone: 'brand',
    label: 'Средний NPS',
    value: '72,4',
    change: '+2,8 пункта',
    positive: true,
  },
  {
    id: 'rising',
    icon: 'rising',
    tone: 'accent',
    label: 'Растущие спикеры',
    value: '34',
    change: '+9 за месяц',
    positive: true,
  },
  {
    id: 'confirmation',
    icon: 'confirmation',
    tone: 'info',
    label: 'Доля подтверждений',
    value: '68%',
    change: '+5,1% к цели',
    positive: true,
  },
] satisfies {
  id: string
  icon: OverviewMetricIcon
  tone: IconTileTone
  label: string
  value: string
  change: string
  positive: boolean
}[]

const monthLabels = ['О', 'Н', 'Д', 'Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С']
const activityValues = [78, 92, 88, 110, 103, 126, 119, 136, 128, 145, 152, 164]

export const aggregateActivity: BarChartDatum[] = activityValues.map((value, index) => ({
  id: `month-${index}`,
  label: monthLabels[index],
  value,
  highlighted: index >= activityValues.length - 3,
}))

export const influenceBreakdown = [
  { id: 'conferences', label: 'Конференции', value: 46, fill: 'strong' },
  { id: 'meetups', label: 'Митапы сообщества', value: 24, fill: 'info' },
  { id: 'online', label: 'Онлайн-контент', value: 19, fill: 'accent' },
  { id: 'internal', label: 'Внутренняя адвокация', value: 11, fill: 'warning' },
] as const

export const topCandidates = [
  { speaker: speakerById('maya-patel'), focus: 'Распределённые системы', match: 96 },
  { speaker: speakerById('jonas-richter'), focus: 'Platform engineering', match: 93 },
  { speaker: speakerById('sofia-alvarez'), focus: 'Cloud-native Java', match: 91 },
  { speaker: speakerById('chris-okafor'), focus: 'Observability', match: 87 },
]

export const rankingPeriods: SelectOption[] = [
  { value: 'quarter', label: 'Этот квартал' },
  { value: 'month', label: 'Этот месяц' },
  { value: 'year', label: 'Этот год' },
]

export const speakerRankings = [
  { id: 'maya-patel', name: 'Майя Патель', score: '92,8', delta: 2 },
  { id: 'jonas-richter', name: 'Йонас Рихтер', score: '89,6', delta: 0 },
  { id: 'sofia-alvarez', name: 'София Альварес', score: '86,4', delta: 4 },
  { id: 'chris-okafor', name: 'Крис Окафор', score: '84,1', delta: -1 },
  { id: 'nina-chen', name: 'Нина Чен', score: '82,7', delta: 6 },
]

/** Font size in px reflects how often the topic appears; featured topics use the brand tint. */
export const topicCloud = [
  { id: 'java', label: 'Java', size: 18, featured: true },
  { id: 'cloud-native', label: 'Cloud native', size: 15, featured: true },
  { id: 'platform', label: 'Platform engineering', size: 17, featured: true },
  { id: 'spring-boot', label: 'Spring Boot', size: 14, featured: false },
  { id: 'architecture', label: 'Архитектура', size: 16, featured: false },
  { id: 'kubernetes', label: 'Kubernetes', size: 13, featured: false },
  { id: 'leadership', label: 'Лидерство', size: 12, featured: false },
  { id: 'observability', label: 'Observability', size: 14, featured: false },
  { id: 'ai', label: 'AI engineering', size: 11, featured: false },
  { id: 'dx', label: 'Developer experience', size: 13, featured: false },
]

export const confirmationPipeline = [
  { id: 'invited', label: 'Приглашены', value: 18, highlighted: false },
  { id: 'confirmed', label: 'Подтвердили', value: 11, highlighted: true },
  { id: 'pending', label: 'Ожидают', value: 4, highlighted: false },
  { id: 'declined', label: 'Отказались', value: 3, highlighted: false },
]

/* ---------- Directory ---------- */

export const directoryHeading = {
  breadcrumb: { section: 'Организатор / Каталог', current: 'Каталог спикеров' },
  title: 'Каталог спикеров',
  description: 'Находите надёжных спикеров по экспертизе, охвату и вкладу в сообщество.',
}

export const directoryFilters = {
  roles: [
    { value: 'all', label: 'Все роли' },
    { value: 'speaker', label: 'Спикеры' },
    { value: 'devrel', label: 'DevRel' },
  ] satisfies SelectOption[],
  regions: [
    { value: 'all', label: 'Все регионы' },
    { value: 'europe', label: 'Европа' },
    { value: 'america', label: 'Северная Америка' },
  ] satisfies SelectOption[],
  companies: [
    { value: 'all', label: 'Любая компания' },
    { value: 'stripe', label: 'Stripe' },
    { value: 'zalando', label: 'Zalando' },
  ] satisfies SelectOption[],
  influence: [
    { value: 'all', label: 'Влияние: любое' },
    { value: 'high', label: 'Влияние: высокое' },
    { value: 'medium', label: 'Влияние: среднее' },
  ] satisfies SelectOption[],
  nps: [
    { id: 'any', label: 'Любой' },
    { id: '60', label: '60+' },
    { id: '70', label: '70+', selected: true },
    { id: '80', label: '80+' },
  ],
  sorting: [
    { value: 'match', label: 'Сортировка: совпадение' },
    { value: 'nps', label: 'Сортировка: NPS' },
    { value: 'name', label: 'Сортировка: имя' },
  ] satisfies SelectOption[],
}

export const directorySummary = {
  total: '248 спикеров',
  shortlisted: '3 в шорт-листе на ближайшие события',
  activeFilters: 'NPS 70+ · 2 фильтра',
}
