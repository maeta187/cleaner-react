'use client'

import { useState } from 'react'
import { Dialog } from '@/component/Dialog'

/**
 * コンポーネントの中にコンポーネントを定義している
 * コンポーネントの中にコンポーネントを作っていることによってsetCounterが実行されるたびにMyTextFieldも再レンダリングされる
 * それにより、入力中のテキストがリセットされてしまう
 */
export const PitfallComponents = () => {
  const [counter, setCounter] = useState(0)

  const MyTextField = () => {
    const [text, setText] = useState('')

    return (
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          color: '#000'
        }}
      />
    )
  }

  return (
    <>
      <MyTextField />
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Clicked {counter} times
      </button>
    </>
  )
}

type Todo = {
  id: number
  title: string
}

/**
 * このようにコンポーネントの中にクソデカコンポーネントを作るとコードが読みにくくなる
 * また、stateの値がどこで参照されているか、どこで更新されているかがわかりにくくなる
 * stateの値がグローバルになるのでどのコンポーネントからでも参照、更新できてしまう
 */
export const AntiDifferentComponentsTodo = () => {
  const todoList: Todo[] = []
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)

  const TodoList = () => {
    return (
      <ul className='todoList'>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <h2 className='todoTitle'>{todo.title}</h2>
            <button
              className='primaryButton'
              onClick={() => setIsUpdateDialogOpen(true)}
            >
              <i className='fa-edit' />
            </button>
          </li>
        ))}
      </ul>
    )
  }

  const UpdateTodoDialog = () => {
    return (
      <Dialog
        open={isUpdateDialogOpen}
        onClose={() => setIsUpdateDialogOpen(false)}
        header='新規TODOの追加'
      >
        <form className='todoForm'>
          <select id='status'>
            <option value='DONE'>やったこと</option>
            <option value='TODO'>今日やること</option>
            <option value='PARKING'>いつかやること</option>
          </select>
          <div className='dialogActionButtonWrapper'>
            <button className='dialogActionNegativeButton'>キャンセル</button>
            <button className='dialogActionPositiveButton' type='submit'>
              更新
            </button>
          </div>
        </form>
      </Dialog>
    )
  }

  return (
    <div>
      <button
        className='primaryButton'
        onClick={() => setIsUpdateDialogOpen(true)}
      >
        <i className='fa-edit' />
        新規作成
      </button>
      <TodoList />
      <UpdateTodoDialog />
    </div>
  )
}
