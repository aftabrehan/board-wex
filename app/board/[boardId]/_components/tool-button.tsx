'use client'

import { LucideIcon } from 'lucide-react'

import { Hint } from '@/components/hint'
import { Button } from '@/components/ui/button'

interface ToolButtonProps {
  label: string
  icon: LucideIcon
  onClick: () => void
  isActive?: boolean
  isDisabled?: boolean
}

export const ToolButton = ({
  label,
  icon: Icon,
  onClick,
  isActive,
  isDisabled,
}: ToolButtonProps) => (
  <Hint label={label} side="right" sideOffset={14}>
    <Button
      disabled={isDisabled}
      onClick={onClick}
      size="icon"
      variant={isActive ? 'boardActive' : 'board'}
    >
      <Icon />
    </Button>
  </Hint>
)
