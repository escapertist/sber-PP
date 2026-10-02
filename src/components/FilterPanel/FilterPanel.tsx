import type { ReactNode } from 'react'
import rotateCcwIcon from '../../assets/icons/rotate-ccw.svg'
import searchIcon from '../../assets/icons/search-sm.svg'
import { Button, Chip, Input, Panel, Select, type SelectOption } from '../ui'
import styles from './FilterPanel.module.scss'

export interface FilterSelect {
  id: string
  /** Accessible name; the first option doubles as the visible placeholder. */
  label: string
  options: ReadonlyArray<SelectOption>
  /** Width in px from the Figma layout. */
  width: number
}

export interface FilterChipOption {
  id: string
  label: string
  selected?: boolean
}

export interface FilterPanelProps {
  searchPlaceholder: string
  selects: ReadonlyArray<FilterSelect>
  resetLabel: string
  chipsLabel?: string
  chips?: ReadonlyArray<FilterChipOption>
  /** Text on the right of the chips row, e.g. a result count. */
  summary?: ReactNode
  /** Where the reset button lives: next to the selects or at the end of the chips row. */
  resetPlacement?: 'selects' | 'chips'
}

export function FilterPanel({
  searchPlaceholder,
  selects,
  resetLabel,
  chipsLabel,
  chips,
  summary,
  resetPlacement = 'selects',
}: FilterPanelProps) {
  const resetButton = (
    <Button
      variant="ghost"
      iconLeft={<img src={rotateCcwIcon} width={15} height={15} alt="" />}
    >
      {resetLabel}
    </Button>
  )

  return (
    <Panel padding="sm" gap="md" role="search">
      <div className={styles.row}>
        <Input
          type="search"
          aria-label={searchPlaceholder}
          placeholder={searchPlaceholder}
          icon={<img src={searchIcon} width={16} height={16} alt="" />}
          className={styles.search}
        />
        {selects.map((select) => (
          <div key={select.id} className={styles.select} style={{ width: select.width }}>
            <Select aria-label={select.label} options={select.options} />
          </div>
        ))}
        {resetPlacement === 'selects' && resetButton}
      </div>

      {chips && (
        <div className={styles.chips}>
          {chipsLabel && <span className={styles.chipsLabel}>{chipsLabel}</span>}
          {chips.map((chip) => (
            <Chip key={chip.id} selected={chip.selected}>
              {chip.label}
            </Chip>
          ))}
          <span className={styles.spacer} />
          {summary && <span className={styles.summary}>{summary}</span>}
          {resetPlacement === 'chips' && resetButton}
        </div>
      )}
    </Panel>
  )
}
