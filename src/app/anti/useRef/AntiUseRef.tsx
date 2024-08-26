'use client'

import { useState } from 'react'

/**
 * 常に太郎くんが負ける爆弾ゲーム
 * timeoutに渡った関数がコンポーネントがレンダリングされたときのスナップショットであるbomberを参照するので、常に太郎くんが負ける
 */
export const AntiUseRef = () => {
  const [bomber, setBomber] = useState('太郎')
  const [selectedMember, setSelectedMembers] = useState('太郎')

  const onGameStart = () => {
    setTimeout(() => {
      alert(`Boom💣🔥 at ${bomber}!!!`)
    }, 10000)
  }

  return (
    <div>
      <button onClick={onGameStart}>ゲームスタート</button>
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
      <p>今ボールを持っている人 {bomber}</p>
    </div>
  )
}
