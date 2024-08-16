'use client'

import { useRouter } from 'next/navigation'
import { use, useEffect } from 'react'

const mockAdmin = () => {
  return {
    isAdmin: true
  }
}

export const ImprovementAdminSuperSecretPage = () => {
  const { isAdmin } = mockAdmin()
  const router = useRouter()

  // useEffectを使わないことで、チラつきを防ぐ
  if (!isAdmin) {
    return router.push('/')
  }

  return (
    <div>
      <h1>Admin Super Secret Page</h1>
      <p>Admin Only</p>
    </div>
  )
}
