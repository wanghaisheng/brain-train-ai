import React from 'react'
import { UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
  return (
    <div>DashboardPage Protected
      <div>
        <UserButton />
      </div>
    </div>
  )
}
