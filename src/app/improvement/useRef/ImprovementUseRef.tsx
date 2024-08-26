'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * useRefはDOMの参照や値を保持するためのフック(レンダリング後にスクロールしたい時などに有効)
 * これはuseRefの使い方の1つに過ぎない
 * useRefを使うのは、コンポーネントに何らかの情報を記憶させたいが、その情報を新たなレンダリングのトリガーにしたくない場合
 */
export const Counter = () => {
  const [text, setText] = useState('')
  const dateRef = useRef(new Date())

  const handleSubmit = () => {
    const body = JSON.stringify({ receptionDate: dateRef.current })
    fetch('/api/patient/registration', { method: 'POST', body })
  }

  return (
    <form onSubmit={handleSubmit}>
      <button
        type='button'
        onClick={() => {
          dateRef.current = new Date()
        }}
      >
        受付時刻を更新
      </button>
      <input onChange={(e) => setText(e.target.value)} />
      <button type='submit'>患者登録</button>
    </form>
  )
}

/**
 * setStateが実行され、stateの値が変更されるとuseEffectが実行される
 * その時にstateRefの値も更新される
 */
const useRefState = <T,>(initialValue: T) => {
  const [state, setState] = useState<T>(initialValue)
  const stateRef = useRef<T>(state)

  useEffect(() => {
    stateRef.current = state
  }, [state])

  return [state, stateRef, setState] as const
}

/**
 * セレクトボックスの値を変更するとsetSelectedMembersを実行してselectedMemberの値を変更(useStateのdispatch)
 * selectedMemberはセレクトボックスの値を保持している(セレクトボックスのUIに影響を与える)
 * 「ボムを渡す」ボタンをクリックするとsetBomberを実行してuseRefStateのdispatchを実行
 * bomberは値が変更されると動的に変わる
 */
export const ImprovementUseRef = () => {
  const [selectedMember, setSelectedMembers] = useState('太郎')
  /**
   * bomber　useRefStateのstate
   * bomberRef　stateRef：useRefの値
   * setBomber　setState：useRefStateのdispatch
   */
  const [bomber, bomberRef, setBomber] = useRefState('太郎')

  const onGameStart = () => {
    setTimeout(() => alert(`Boom💣🔥 at ${bomberRef.current}!!!`), 1000)
  }

  return (
    <div>
      <p>今ボールを持っている人 {bomber}</p>
      <button type='button' onClick={onGameStart}>
        ゲームスタート
      </button>
      <select
        value={selectedMember}
        onChange={(e) => setSelectedMembers(e.target.value)}
        style={{
          color: '#000'
        }}
      >
        <option value='太郎'>太郎</option>
        <option value='秋子'>秋子</option>
        <option value='花子'>花子</option>
      </select>
      <button onClick={() => setBomber(selectedMember)}>ボムを渡す</button>
    </div>
  )
}
