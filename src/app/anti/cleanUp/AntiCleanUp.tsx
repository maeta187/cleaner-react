'use client'

import { useEffect } from 'react'

/**
 * クリーンアップ関数が無いので、コンポーネントが mount する度に eventListener が増え続ける
 * mount、unmount を繰り返して矢印キー↑を押すと、コンソールにメッセージが何度も表示される
 */
export const AntiCleanUp = () => {
  useEffect(() => {
    // 矢印キー↑が押された時にコンソールにメッセージを表示する
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        console.log('上昇している！！')
      }
    }

    document.addEventListener('keydown', onKeyPress)
  }, [])

  return (
    <div>
      <p>Press any key to see the event listener in action.</p>
    </div>
  )
}
