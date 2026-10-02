import { talkStatuses, type TalkStatus } from '../../mocks/talks'
import { Badge } from '../ui'

export interface TalkStatusBadgeProps {
  status: TalkStatus
}

export function TalkStatusBadge({ status }: TalkStatusBadgeProps) {
  const { label, tone } = talkStatuses[status]

  return <Badge tone={tone}>{label}</Badge>
}
