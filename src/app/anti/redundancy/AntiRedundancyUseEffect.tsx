'use client'

import { useEffect, useState } from 'react'

type Options = {
  code: string
  name: string
  isDefault: boolean
}

/**
 * 一見するとoptionsが更新された時にsetDefaultSelectOptionでstateを更新する問題はないように見える
 * だが、useEffect内のsetter関数によって2回前のレンダリングが発生し、無駄なレンダリングが発生している
 * もし、計算処理を最適化するのであればuseMemoを使用する
 */
export const AntiRedundancyUseEffect = () => {
  const [options, setOptions] = useState<Options[] | undefined>(undefined)
  const [defaultSelectOption, setDefaultSelectOption] = useState('')

  useEffect(() => {
    const newDefaultSelectOption = options?.find(
      (option) => option.isDefault
    )?.code
    setDefaultSelectOption(newDefaultSelectOption ?? '')
  }, [options])

  return (
    <div>
      <ul>
        {options?.map((option) => (
          <li key={option.code}>{option.name}</li>
        ))}
      </ul>
      <h2>defaultSelectOption</h2>
      <p>{defaultSelectOption}</p>
    </div>
  )
}
