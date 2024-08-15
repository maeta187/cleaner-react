'use client'

import { useEffect, useState } from 'react'

type Option = {
  code: string
  name: string
  isDefault: boolean
}

export const ImprovementPracticalRedundantState = () => {
  const [isLoading, setIsLoading] = useState(false)
  // APIからのレスポンスを状態管理
  const [options, setOptions] = useState<Option[] | undefined>(undefined)

  useEffect(() => {
    setIsLoading(true)
    const fetchOptions = async () => {
      const res = await fetch('/api/options')
      const optionsData: Option[] = await res.json()
      // APIからのレスポンスをそのままstateに保持
      setOptions(optionsData)

      setIsLoading(false)
    }
    fetchOptions()
  }, [])

  // 必要なデータはuseEffectの外で変数に代入して利用
  const selectOptions = options?.map((option) => ({
    value: option.code,
    label: option.name
  }))

  // 改善前は要素を取得していたがcodeを取得するように変更(codeは一意と仮定)
  const defaultSelectOption = options?.find((option) => option.isDefault)?.code

  return // 省略
}
