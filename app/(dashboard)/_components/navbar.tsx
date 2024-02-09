'use client'

import {
  UserButton,
  OrganizationSwitcher,
  useOrganization,
} from '@clerk/nextjs'

import { SearchInput } from './search-input'
import { InviteButton } from './invite-button'

export const Navbar = () => {
  const { organization } = useOrganization()

  const variables = {
    colorPrimary: '#ffbf42',
    colorAlphaShade: '#ffbf42',
  }

  const orgTileStyles = {
    ...variables,
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
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher hidePersonal appearance={orgTileStyles} />
      </div>
      {organization && <InviteButton />}
      <UserButton appearance={{ variables }} />
    </div>
  )
}
