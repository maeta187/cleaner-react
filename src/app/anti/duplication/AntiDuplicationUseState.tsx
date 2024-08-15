'use client'

import { useState } from 'react'

type Cake = { title: string; id: number }

const initialCakes: Cake[] = [
  { title: 'ショートケーキ', id: 0 },
  { title: 'フルーツケーキ', id: 1 },
  { title: 'チョコレートケーキ', id: 2 }
]

/**
 * fullNameも状態管理しているが、firstNameとlastNameから算出できるので状態管理する必要がない
 * selectedCakeで選択したセレクトボックスの要素を管理しているが。titleが動的に変更された場合に対応できない
 */
export const AntiDuplicationUseState = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  const [cakes, setCakes] = useState(initialCakes)
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null)

  return (
    <div>
      <ul>
        {cakes.map((cake) => (
          <li key={cake.id}>
            {cake.title}
            <button onClick={() => setSelectedCake(cake)}>
              このケーキを選ぶ！
            </button>
          </li>
        ))}
      </ul>
      {selectedCake && <p>{selectedCake.title}</p>}
    </div>
  )
}
