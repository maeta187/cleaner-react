'use client'

import { useState } from 'react'

/**
 * onClickThreeUpMoonを実行しても＋３されない
 * setLeftMarioCountをそれぞれ処理し、レンダリングを行うことは、パフォーマンスが悪くなる
 * Reactの仕様上onClickThreeUpMoonの全ての処理が完了してレンダリングが行われる
 * これがよく言うStateの更新とレンタリングによるクロージャーの問題
 */
export const AntiStateClosure = () => {
  const [leftMarioCount, setLeftMarioCount] = useState(0)

  const onClickThreeUpMoon = () => {
    setLeftMarioCount(leftMarioCount + 1)
    setLeftMarioCount(leftMarioCount + 1)
    setLeftMarioCount(leftMarioCount + 1)
  }

  return (
    <>
      <h1>{leftMarioCount}</h1>
      <button onClick={onClickThreeUpMoon}>🌛３UPムーン</button>
    </>
  )
}
