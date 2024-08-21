'use client'

import { useCallback, useEffect, useState } from 'react'

const initialSeconds = 60 * 3

type WithLoopProps = {
  bonusCount: number
}

export const ImprovementDependentArray = () => {
  const [leftSeconds, setLeftSeconds] = useState(initialSeconds)

  /**
   * この処理は無限ループでエラーになりそうだが、setIntervalを使用しているため、クリーンアップ関数が呼ばれることでエラーを回避できる
   * 都度新しいsetInterval関数が生成される
   */
  useEffect(() => {
    const id = setInterval(() => {
      setLeftSeconds(leftSeconds - 1)
    }, 1000)
    return () => clearInterval(id)
  }, [leftSeconds])

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

export const AnotherImprovementDependentArray = () => {
  const [leftSeconds, setLeftSeconds] = useState(initialSeconds)
  /**
   * updater functionを使用するパターン
   * 依存配列による無限ループも無ければ。setIntervalの再生成も不要
   */
  useEffect(() => {
    const id = setInterval(() => {
      setLeftSeconds((prevLeftSeconds) => prevLeftSeconds - 1)
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

export const ImprovementPrevInOtherStates = () => {
  /**
   * このようにオブジェクトで管理することで、Prevでそれぞれの値を参照できる
   */
  const [counter, setCounter] = useState({ count: 0, incrementValue: 1 })
  useEffect(() => {
    setCounter((prev) => ({ ...prev, count: prev.count + prev.incrementValue }))
  }, [])
}

export const ImprovementWithLoop = ({ bonusCount }: WithLoopProps) => {
  const [count, setCount] = useState(0)

  /**
   * useEffectを使用せずに処理を書くことで2回前のレンダリングが回避できる
   */
  if (count < bonusCount) {
    setCount((prevCount) => prevCount + bonusCount)
  }

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

/**
 * useEffectを使用せずに処理を書くことで2回前のレンダリングが回避できる
 */
const DiveIntoEffect = () => {
  const [query, setQuery] = useState('react')
  const [data, setData] = useState()

  /**
   * useCallbackが使用されており、queryが変更された時のみfetchDataが再生成される
   */
  const fetchData = useCallback(async () => {
    const result = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    )
    return result.json()
  }, [query])

  /**
   * こちらも間接的にqueryが変更された時のみ処理される
   */
  useEffect(() => {
    ;(async () => {
      const responseData = await fetchData()
      setData(responseData)
    })()
  }, [fetchData])
}
