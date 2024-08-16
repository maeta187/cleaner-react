'use client'

import { v4 as uuid } from 'uuid'

/**
 * keyはユニークである必要があるので以下の方法でユニークkeyを作成する
 * 1. ライブラリを使用する
 * 2. サーバーサイドで生成してフロントに渡す
 * 3. WebAPIを使用して生成する
 */

const externalCakes = [
  { title: 'ショートケーキ', id: uuid() },
  { title: 'フルーツケーキ', id: uuid() },
  { title: 'チョコレートケーキ', id: uuid() }
]

export const ExternalKey = () => {
  return (
    <ul>
      {/* externalCakesはコンポーネントの外で作られたものなのでコンポーネントの再レンダリングが発生しても影響を受けない */}
      {externalCakes.map((cake) => (
        <li key={cake.id}>{cake.title}</li>
      ))}
    </ul>
  )
}

const randomUUIDCakes = [
  {
    title: 'ショートケーキ',
    id: typeof self !== 'undefined' ? self.crypto.randomUUID() : uuid()
  },
  {
    title: 'フルーツケーキ',
    id: typeof self !== 'undefined' ? self.crypto.randomUUID() : uuid()
  },
  {
    title: 'チョコレートケーキ',
    id: typeof self !== 'undefined' ? self.crypto.randomUUID() : uuid()
  }
]

export const ImprovementKey = () => {
  return (
    <ul>
      {randomUUIDCakes.map((cake) => (
        <li key={cake.id}>{cake.title}</li>
      ))}
    </ul>
  )
}

/**
 * 要素の順番が変わらない場合は、indexをkeyに使うことができる
 * 順番が変わる場合はindexの使用は避ける
 */
export const UseIndexAsKey = () => {
  const cakes = [
    { title: 'ショートケーキ', id: uuid() },
    { title: 'フルーツケーキ', id: uuid() },
    { title: 'チョコレートケーキ', id: uuid() }
  ]

  return (
    <ul>
      {cakes.map((cake, index) => (
        <li key={index}>{cake.title}</li>
      ))}
    </ul>
  )
}
