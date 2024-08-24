'use client'

import { useState } from 'react'
import { Dialog } from '@/component/Dialog'

type Todo = {
  id: number
  title: string
}

type TodoListProps = {
  todoList: Todo[]
  setIsUpdateDialogOpen: (isOpen: boolean) => void
}

type UpdateTodoDialogProps = {
  isUpdateDialogOpen: boolean
  setIsUpdateDialogOpen: (isOpen: boolean) => void
}

/**
 * MyTextFieldをコンポーネントの外に定義することで再レンダリングされても入力中のテキストがリセットされない
 */
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

export const PitfallComponents = () => {
  const [counter, setCounter] = useState(0)

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

const TodoList = ({ todoList, setIsUpdateDialogOpen }: TodoListProps) => {
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

const UpdateTodoDialog = ({
  isUpdateDialogOpen,
  setIsUpdateDialogOpen
}: UpdateTodoDialogProps) => {
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

/**
 * TodoList、UpdateTodoDialogをコンポーネントの外に定義することでコードが読みやすくなる
 * stateもグローバルにならず、propsで渡さない限りどのコンポーネントからも参照、更新できないようになる
 * また、TodoList、UpdateTodoDialogの汎用性が高まる
 */
export const ImprovementDifferentComponentsTodo = () => {
  const todoList: Todo[] = []
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)

  return (
    <div>
      <button
        className='primaryButton'
        onClick={() => setIsUpdateDialogOpen(true)}
      >
        <i className='fa-edit' />
        新規作成
      </button>
      <TodoList
        todoList={todoList}
        setIsUpdateDialogOpen={setIsUpdateDialogOpen}
      />
      <UpdateTodoDialog
        isUpdateDialogOpen={isUpdateDialogOpen}
        setIsUpdateDialogOpen={setIsUpdateDialogOpen}
      />
    </div>
  )
}
