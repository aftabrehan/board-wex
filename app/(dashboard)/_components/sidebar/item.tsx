'use client'

import Image from 'next/image'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'

import { Hint } from '@/components/hint'

import { cn } from '@/lib/utils'

interface ItemProps {
  id: string
  name: string
  imageUrl: string
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization()
  const { setActive } = useOrganizationList()

  const isActive = organization?.id === id

  const onClick = () => {
    if (!setActive) return
    setActive({ organization: id })
  }

  return (
    <div
      className={cn(
        'aspect-square relative border-2 border-transparent rounded-[8px] opacity-75 hover:opacity-100 transition cursor-pointer',
        isActive && 'p-[1px] opacity-100 border-white'
      )}
    >
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          alt={name}
          src={imageUrl}
          onClick={onClick}
          width={32}
          height={32}
          className="rounded-[5px] w-full h-full"
        />
      </Hint>
    </div>
  )
}
