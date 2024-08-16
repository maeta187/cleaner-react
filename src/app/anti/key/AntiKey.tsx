'use client'

import { v4 as uuid } from 'uuid'

/**
 * キーは付ければ良いというわけではない
 * キーはデータが変更された時に追加、削除、並び替えが行われるかどうかをReactに伝えるために必要
 * キーが設定されていることにより、対象の要素を削除せずに更新して使用できるのでパフォーマンスが低下しない
 * これを元にUIをアップデートするので、キーがないとUIが正しく更新されない
 * key が変化しないことと key がユニークであることの２つの条件を満たす必要がある
 * keyが変化すると、不必要なDOMの更新が発生する
 * keyをコンポーネント内のidを使用すると、コンポーネントが再レンダリングされた際にidが変わるため、keyが変化してしまい不要なDOMの更新が発生する
 */
export const AntiKey = () => {
  const cakes = [
    { title: 'ショートケーキ', id: uuid() },
    { title: 'フルーツケーキ', id: uuid() },
    { title: 'チョコレートケーキ', id: uuid() }
  ]

  return (
    <ul>
      {cakes.map((cake) => (
        <li key={cake.id}>{cake.title}</li>
      ))}
    </ul>
  )
}
