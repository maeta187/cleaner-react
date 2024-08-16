'use client'

import { useRouter } from 'next/navigation'
import { use, useEffect } from 'react'

const mockAdmin = () => {
  return {
    isAdmin: true
  }
}

/**
 * 一見すると、isAdminがfalseの場合にリダイレクトする処理は問題ないように見える
 * だが、useEffectはレンダリング後に実行されるため、一瞬だけAdmin Super Secret Pageが表示される
 * いわいるチラつきが発生する
 */
export const AntiAdminSuperSecretPage = () => {
  const { isAdmin } = mockAdmin()
  const router = useRouter()

  useEffect(() => {
    if (!isAdmin) {
      router.push('/')
    }
  }, [isAdmin])

  return (
    <div>
      <h1>Admin Super Secret Page</h1>
      <p>Admin Only</p>
    </div>
  )
}
