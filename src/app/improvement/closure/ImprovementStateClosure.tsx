'use client'

import { useReducer, useState } from 'react'

/**
 * setState にupdater functionを渡すことで＋3される
 * updater functionを書くことはマストではないが、新が以前の state に依存している場合や同じイベント内で複数回 state を更新する場合は使用する
 */
export const ImprovementStateClosure = () => {
  const [leftMarioCount, setLeftMarioCount] = useState(0)

  const onClickOneUPMushroom = () => {
    setLeftMarioCount(leftMarioCount + 1)
  }

  const onClickThreeUpMoon = () => {
    setLeftMarioCount((prevCount) => prevCount + 1)
    setLeftMarioCount((prevCount) => prevCount + 1)
    setLeftMarioCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <h1>{leftMarioCount}</h1>
      <button onClick={onClickOneUPMushroom}>🍄１UPキノコ</button>
      <button onClick={onClickThreeUpMoon}>🌛３UPムーン</button>
    </>
  )
}

type Action = 'clickMushroom' | 'clickMoon'

const reducer = (state: number, action: Action) => {
  switch (action) {
    case 'clickMushroom':
      return state + 1
    case 'clickMoon':
      return state + 3
    default:
      throw new Error('不正なactionの値です')
  }
}

/**
 * stateの更新が複雑になる場合はuseReducerを使用する
 * reducer()コンポーネントの外に定義することで、コンポーネントの再レンダリング時に再定義されることを防ぐことができる
 */
export const ImprovementUseReducerCounter = () => {
  const [leftMarioCount, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <h1>{leftMarioCount}</h1>
      <button onClick={() => dispatch('clickMushroom')}>🍄１UPキノコ</button>
      <button onClick={() => dispatch('clickMoon')}>🌛３UPムーン</button>
    </>
  )
}
