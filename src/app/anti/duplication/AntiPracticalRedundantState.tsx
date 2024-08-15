'use client'

import { useEffect, useState } from 'react'

type Option = {
  code: string
  name: string
  isDefault: boolean
}

/**
 * APIのレスポンスを元にデータ加工した結果をstateに保持している
 * それであればAPIのレスポンスをそのままstateに保持し、必要なデータはuseEffectの外で変数に代入して利用する
 */
export const PracticalRedundantState = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [selectOptions, setSelectOptions] = useState<
    { value: string; label: string }[] | null
  >(null)
  const [defaultSelectOption, setDefaultSelectOption] = useState<
    Option | undefined
  >(undefined)

  useEffect(() => {
    setIsLoading(true)
    const fetchOptions = async () => {
      const res = await fetch('/api/options')
      const optionsData: Option[] = await res.json()

      const selectOptionsData = optionsData.map((option) => ({
        value: option.code,
        label: option.name
      }))
      setSelectOptions(selectOptionsData)

      const defaultSelectOptionData = optionsData.find(
        (option) => option.isDefault
      )
      setDefaultSelectOption(defaultSelectOptionData)

      setIsLoading(false)
    }
    fetchOptions()
  }, [])

  return // 省略
}
