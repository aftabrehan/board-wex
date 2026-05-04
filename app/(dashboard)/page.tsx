'use client'

import { use } from 'react'
import { useOrganization } from '@clerk/nextjs'

import { EmptyOrg } from './_components/empty-org'
import { BoardList } from './_components/board-list'

interface DashboardPageProps {
  searchParams: Promise<{
    search?: string
    favorites?: string
  }>
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization()
  const resolvedSearchParams = use(searchParams)

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={resolvedSearchParams} />
      )}
    </div>
  )
}

export default DashboardPage
