'use client'

import { useEffect } from 'react'

/**
 * クリーンアップ関数を書き漏らしたということに気づきにくいという問題がある
 * ReactではstrictModeが有効になっている場合、2回目のレンダリング結果が1回目と異なる場合に警告が表示される
 * また、Next.jsではnext.config.jsにstrictMode: trueを設定することでstrictModeを有効にできる
 */
export const ImprovementCleanUp = () => {
  useEffect(() => {
    // 矢印キー↑が押された時にコンソールにメッセージを表示する
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        console.log('上昇している！！')
      }
    }

    document.addEventListener('keydown', onKeyPress)
    // クリーンアップ関数を追加して、コンポーネントが unmount された時に eventListener を削除する
    return () => document.removeEventListener('keydown', onKeyPress)
  }, [])

  return (
    <div>
      <p>Press any key to see the event listener in action.</p>
    </div>
  )
}
