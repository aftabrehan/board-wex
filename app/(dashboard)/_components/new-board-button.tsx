'use client'

import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'
import { toast } from 'sonner'

import { cn } from '@/lib/utils'
import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/hooks/use-api-mutation'

interface NewBoardButtonProps {
  orgId: string
  disabled?: boolean
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const router = useRouter()
  const { mutate, pending } = useApiMutation(api.board.create)

  const onClick = () => {
    mutate({
      orgId,
      title: 'Untitled',
    })
      .then(id => {
        toast.success('Board created')
        router.push(`/board/${id}`)
      })
      .catch(() => toast.error('Failed to create board'))
  }

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        'col-span-1 aspect-[100/127] bg-amber rounded-lg hover:bg-amber/80 flex flex-col items-center justify-center gap-2 py-6',
        (pending || disabled) && 'opacity-75 hover:bg-amber cursor-not-allowed'
      )}
    >
      <Plus className="h-12 w-12 text-white stroke-1.5" />
      <p className="text-base text-white font-medium">New board</p>
    </button>
  )
}
