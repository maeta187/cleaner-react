'use client'

import { useEffect, useState } from 'react'

/**
 * useEffectを使用して初回レンダリング時にAPIを実行する処理はよく使われる
 * useEffectは非同期処理を行うために最適化されたフックではない
 * useEffectをそのまま非同期処理として使用すると様々な問題が発生し、その1つにRaceCondition問題がある
 * RaceCondition問題とは、処理過程の出力結果が、処理の実行順序に依存する問題
 * タイミングによっては正常に動作する場合があり、バグが発生した時の原因特定が難しい
 * 補足：useEffectを内は2回実行されるので、2回実行されても問題ない処理にするか、クリーンアップ処理を行う必要がある
 */
export const AntiUseEffect = () => {
  const [todoList, setTodoList] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [keyword, setKeyword] = useState()

  useEffect(() => {
    let ignore = false

    setIsLoading(true)
    const fetchFn = async () => {
      const response = await fetch(`/api/todos&keyword=${keyword}`, {
        method: 'GET'
      })
      const todoList = await response.json()
      if (!ignore) {
        setTodoList(todoList)
      }
    }
    fetchFn()
    setIsLoading(false)

    return () => {
      ignore = true
    }
  }, [])
  return <div></div>
}
