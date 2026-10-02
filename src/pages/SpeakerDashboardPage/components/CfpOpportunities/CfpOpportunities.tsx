import arrowUpRightIcon from '../../../../assets/icons/arrow-up-right.svg'
import { Badge, Button, LinkButton, ListItem, Panel, SectionHeader } from '../../../../components/ui'
import type { CfpOpportunity } from '../../../../mocks/speakerDashboard'
import styles from './CfpOpportunities.module.scss'

export interface CfpOpportunitiesProps {
  opportunities: CfpOpportunity[]
  totalCount: number
  className?: string
}

export function CfpOpportunities({ opportunities, totalCount, className }: CfpOpportunitiesProps) {
  return (
    <Panel gap="none" className={className} aria-labelledby="cfp-opportunities-title">
      <SectionHeader
        titleId="cfp-opportunities-title"
        title="Рекомендованные CFP"
        description="Подобраны по вашим темам, опыту и предпочтениям в поездках"
        action={<Button variant="secondary">Все {totalCount}</Button>}
      />

      <ul className={styles.list}>
        {opportunities.map((opportunity) => (
          <ListItem
            key={opportunity.id}
            leading={
              <span className={styles.deadline}>
                <span className={styles.deadlineDay}>10</span>
                <span className={styles.deadlineMonth}>дек</span>
              </span>
            }
            title={'Название конференции'}
            description={'Екатеринбург'}
            trailing={
              <>
                <Badge>{opportunity.match}% совпадения</Badge>
                <LinkButton
                  to={opportunity.href}
                  variant="ghost"
                  iconLeft={<img src={arrowUpRightIcon} width={15} height={15} alt="" />}
                >
                  Открыть CFP
                </LinkButton>
              </>
            }
          />
        ))}
      </ul>
    </Panel>
  )
}
