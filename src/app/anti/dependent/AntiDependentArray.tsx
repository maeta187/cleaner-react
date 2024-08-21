'use client'

import { useState, useEffect } from 'react'

const initialSeconds = 60 * 3

type WithLoopProps = {
  bonusCount: number
}

/**
 * このuseEffectば空の配列を渡しているため、コンポーネントがマウントされた時のみ実行される
 * なので3分経っても画面上では何も起きない
 * また、空の配列を渡すと、Lintで警告が出る
 * setState(state + 1)のようにstateの更新は、stateに依存せずに行うことができる(現在のstateの値を直接参照していないので)
 * かと言って、leftSecondsを依存配列に入れると、setLeftSecondsが呼ばれるたびにuseEffectが実行されてしまう(無限ループ)
 */
export const AntiDependentArray = () => {
  const [leftSeconds, setLeftSeconds] = useState(initialSeconds)

  useEffect(() => {
    const id = setInterval(() => {
      setLeftSeconds(leftSeconds - 1)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return (
    <div>
      <h1>{leftSeconds}</h1>
      {leftSeconds > 0 ? (
        <span>You are fixing ramen...</span>
      ) : (
        <span>３分経過しました！</span>
      )}
    </div>
  )
}

/**
 * この状態だと、countのPrevは参照できても、incrementValueのPrevは参照できない
 */
export const AntiPrevInOtherStates = () => {
  const [incrementValue, setIncrementValue] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount((prevCount) => prevCount + incrementValue)
  }, [])
}

/**
 * このuseEffect内のsetCountが呼ばれると2回前のレンダリングが実行される
 * ただし、bonusCountの価が変わることはないので、2回前のレンダリングの結果は同じ
 */
export const AntiWithLoop = ({ bonusCount }: WithLoopProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count < bonusCount) {
      setCount((prevCount) => prevCount + bonusCount)
    }
  }, [])

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}
