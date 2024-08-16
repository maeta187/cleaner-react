'use client'

import { useMemo, useState } from 'react'

type Options = {
  code: string
  name: string
  isDefault: boolean
}

export const ImprovementRedundancyUseEffect = () => {
  const [options, setOptions] = useState<Options[] | undefined>(undefined)
  // ここでdefaultSelectOptionをuseMemoを使って最適化
  const defaultSelectOption = useMemo(
    () => options?.find((option) => option.isDefault)?.code,
    [options]
  )

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
