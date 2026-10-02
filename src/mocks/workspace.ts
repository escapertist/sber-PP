// Mock data for the shared workspace shell (sidebar and top bar). Replace with API calls once the backend is ready.

import { routes } from '../routes'
import type { UserRole } from './auth'

export type NavigationIcon =
  | 'dashboard'
  | 'profile'
  | 'talks'
  | 'media'
  | 'speakers'
  | 'blindSpots'
  | 'events'
  | 'roles'

export interface NavigationItem {
  id: string
  icon: NavigationIcon
  label: string
  href: string
}

export interface WorkspaceRole {
  id: UserRole
  label: string
  /** Label shown in the top bar. */
  workspaceLabel: string
  href: string
}

export const workspaceBrand = {
  name: 'StarLift',
  tagline: 'Пространство клуба',
}

export const workspaceRoles: Record<UserRole, WorkspaceRole> = {
  speaker: {
    id: 'speaker',
    label: 'Спикер',
    workspaceLabel: 'Пространство спикера',
    href: routes.speaker,
  },
  organizer: {
    id: 'organizer',
    label: 'Организатор',
    workspaceLabel: 'Пространство организатора',
    href: routes.organizer,
  },
}

export const navigation: Record<UserRole, NavigationItem[]> = {
  speaker: [
    { id: 'dashboard', icon: 'dashboard', label: 'Дашборд', href: routes.speaker },
    { id: 'profile', icon: 'profile', label: 'Мой профиль', href: routes.speakerProfile },
    { id: 'talks', icon: 'talks', label: 'Доклады', href: routes.speakerTalks },
    { id: 'media', icon: 'media', label: 'Лекции и медиа', href: routes.speakerMedia },
  ],
  organizer: [
    { id: 'overview', icon: 'dashboard', label: 'Обзор', href: routes.organizer },
    { id: 'speakers', icon: 'speakers', label: 'Каталог спикеров', href: routes.organizerSpeakers },
    { id: 'blindSpots', icon: 'blindSpots', label: 'Слепые зоны', href: routes.organizerBlindSpots },
    { id: 'events', icon: 'events', label: 'Парсинг и события', href: routes.organizerEvents },
    { id: 'roles', icon: 'roles', label: 'Роли и доступ', href: routes.organizerRoles },
  ],
}

export const currentUser = {
  name: 'Иван Иванов',
  initials: 'ИИ',
}
