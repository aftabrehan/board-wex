'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Poppins } from 'next/font/google'
import { LayoutDashboard, Star } from 'lucide-react'
import { OrganizationSwitcher } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

const font = Poppins({ subsets: ['latin'], weight: ['600'] })

export const OrgSidebar = () => {
  const searchParams = useSearchParams()
  const favorites = searchParams.get('favorites')

  const orgTileStyles = {
    variables: {
      colorPrimary: '#ffbf42',
      colorAlphaShade: '#ffbf42',
    },
    elements: {
      rootBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '376px',
      },
      organizationSwitcherTrigger: {
        padding: '6px',
        width: '100%',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        justifyContent: 'space-between',
        backgroundColor: 'white',
      },
    },
  }

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="Logo" height={28} width={28} />
          <span className={cn('font-semibold text-2xl', font.className)}>
            BoardWex
          </span>
        </div>
      </Link>
      <OrganizationSwitcher hidePersonal appearance={orgTileStyles} />
      <div className="space-y-1 w-full">
        <Button
          variant={favorites ? 'ghost' : 'secondary'}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2 stroke-amber" />
            Team boards
          </Link>
        </Button>
        <Button
          variant={favorites ? 'secondary' : 'ghost'}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link
            href={{
              pathname: '/',
              query: { favorites: true },
            }}
          >
            <Star className="h-4 w-4 mr-2 stroke-amber" />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  )
}
