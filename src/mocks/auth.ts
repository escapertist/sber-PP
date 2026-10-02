// Mock data for the sign-in page. Replace with API calls once the backend is ready.

export type BenefitIcon = 'mic' | 'users' | 'shield'
export type UserRole = 'speaker' | 'organizer'
export type AuthMode = 'signIn' | 'signUp'

export interface Benefit {
  id: string
  icon: BenefitIcon
  title: string
  description: string
}

export interface CommunityMember {
  id: string
  initials: string
}

export interface RoleOption {
  id: UserRole
  title: string
  hint: string
}

export interface Credentials {
  email: string
  password: string
  remember: boolean
}

export const welcomeContent = {
  badge: 'Создано для сообществ разработчиков',
  headline: 'Сделаем каждый технический голос заметнее',
  description:
    'Ведите учёт докладов, усиливайте влияние спикеров и помогайте организаторам находить нужную экспертизу для каждого мероприятия.',
}

export const benefits: Benefit[] = [
  {
    id: 'speakers',
    icon: 'mic',
    title: 'Спикерам',
    description:
      'Создайте профиль, которому доверяют, управляйте докладами и медиа, находите CFP по своим темам.',
  },
  {
    id: 'organizers',
    icon: 'users',
    title: 'Организаторам и DevRel',
    description:
      'Оценивайте кандидатов объективно, находите новые имена и закрывайте пробелы в воронке спикеров.',
  },
  {
    id: 'source-of-truth',
    icon: 'shield',
    title: 'Единый надёжный источник данных',
    description:
      'Роли, данные о мероприятиях, отзывы и метрики выступлений — упорядочены и прозрачны.',
  },
]

export const communityStats = {
  membersCount: 2480,
  featuredMembers: [
    { id: 'm1', initials: 'МК' },
    { id: 'm2', initials: 'ЮС' },
    { id: 'm3', initials: 'АР' },
    { id: 'm4', initials: 'ЛТ' },
  ] satisfies CommunityMember[],
}

export const roleOptions: RoleOption[] = [
  { id: 'speaker', title: 'Спикер', hint: 'Развивайте профиль' },
  { id: 'organizer', title: 'Организатор / DevRel', hint: 'Находите сильных спикеров' },
]

export const demoCredentials: Credentials = {
  email: 'alex.kim@acme.dev',
  password: 'starlift-demo',
  remember: true,
}

const MOCK_LATENCY_MS = 600

export function mockSignIn(credentials: Credentials): Promise<{ email: string }> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ email: credentials.email }), MOCK_LATENCY_MS)
  })
}
