'use client'

import { useState } from 'react'

type Cake = { title: string; id: number }

const initialCakes: Cake[] = [
  { title: 'ショートケーキ', id: 0 },
  { title: 'フルーツケーキ', id: 1 },
  { title: 'チョコレートケーキ', id: 2 }
]

export const ImprovementDuplicationUseState = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  // firstNameとlastNameから算出できるので状態管理する必要がない
  const fullName = firstName + lastName

  const [cakes, setCakes] = useState(initialCakes)
  const [selectedCakeId, setSelectedCakeId] = useState<number | null>(null)
  // cakesからselectedCakeIdで選択した要素を取得する
  const selectedCake = cakes.find((cake) => cake.id === selectedCakeId)

  return (
    <div>
      <ul>
        {cakes.map((cake) => (
          <li key={cake.id}>
            {cake.title}
            <button onClick={() => setSelectedCakeId(cake.id)}>
              このケーキを選ぶ！
            </button>
          </li>
        ))}
      </ul>
      {selectedCake && <p>{selectedCake.title}</p>}
    </div>
  )
}
