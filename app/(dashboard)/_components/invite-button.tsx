import { Plus } from 'lucide-react'
import { OrganizationProfile } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export const InviteButton = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="h-[45px] lg:h-[40px]">
        <Plus className="h-4 w-4 xs:mr-2" />
        <span className="hidden xs:inline-flex">Invite members</span>
      </Button>
    </DialogTrigger>
    <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
      <OrganizationProfile />
    </DialogContent>
  </Dialog>
)
