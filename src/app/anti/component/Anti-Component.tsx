'use client'

import React, { useState } from 'react'

type Todo = {
  id: string
  title: string
  description: string
  deadline: string
}

/**
 * 1つのコンポーネントに全てのロジック、スタイル、マークアップが含まれている
 * 実務だとこれよりボリュームが大きくなるので、可読性が下がる
 * また、機能ごとの責務が分かれていないため、保守性が下がる
 * コンポーネントの中でも機能系、表示系など分けることで可読性、保守生が向上する
 * パフォーマンスを意識するならmemo化を行うが、コンポーネントを小さく分けることが重要
 */
export const AntiComponent = () => {
  const todoList: Todo[] = []
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)

  return (
    <div>
      <button
        className='primaryButton'
        type='button'
        onClick={() => setIsCreateDialogOpen(true)}
      >
        <i className='fa-edit' />
        新規作成
      </button>
      <ul className='todoList'>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <h2 className='todoTitle'>{todo.title}</h2>
            <p className='todoDescription'>{todo.description}</p>
            <p className='totoDeadline'>{todo.deadline}</p>
            <button
              className='primaryButton'
              type='button'
              onClick={() => setIsUpdateDialogOpen(true)}
            >
              <i className='fa-edit' />
            </button>
          </li>
        ))}
      </ul>
      <dialog open={isCreateDialogOpen}>
        <div className='iconWrapper'>
          <button type='button' onClick={() => setIsCreateDialogOpen(false)}>
            ✖️
          </button>
        </div>
        <h2 className='dialogTitle'>新規TODOの追加</h2>
        <form className='todoForm'>
          <div className='formElement'>
            <label htmlFor='title'>TODOのタイトル</label>
            <input name='title' id='title' />
          </div>
          <div className='formElement'>
            <label htmlFor='title'>TODOの内容</label>
            <input name='description' id='description' />
          </div>
          <div className='formElement'>
            <label htmlFor='deadline'>TODOの期限</label>
            <input name='deadline' id='deadline' />
          </div>
          <div className='dialogActionButtonWrapper'>
            <button className='dialogActionNegativeButton' type='button'>
              キャンセル
            </button>
            <button className='dialogActionPositiveButton' type='submit'>
              追加
            </button>
          </div>
        </form>
      </dialog>
      <dialog open={isUpdateDialogOpen}>
        <div className='iconWrapper'>
          <button type='button' onClick={() => setIsUpdateDialogOpen(false)}>
            ✖️
          </button>
        </div>
        <h2>TODOのステータス追加</h2>
        <form>
          <select id='status'>
            <option value='DONE'>やったこと</option>
            <option value='TODO'>今日やること</option>
            <option value='PARKING'>いつかやること</option>
          </select>
          <div className='dialogActionButtonWrapper'>
            <button type='button' className='dialogActionNegativeButton'>
              キャンセル
            </button>
            <button className='dialogActionPositiveButton' type='submit'>
              更新
            </button>
          </div>
        </form>
      </dialog>
    </div>
  )
}
