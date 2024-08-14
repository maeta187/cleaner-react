'use client'

import { useEffect, useState } from 'react'

interface Todo {
  id: number
  title: string
}

/**
 * 子コンポーネントに存在したtodoList の state とそのデータ取得に関わる処理を親コンポーネントに移動
 * todoListが重複して管理されていた問題を解消
 * 子コンポーネントにはtodoListだけを渡してUIの責務とする
 * 入力フォームなどでは子コンポーネントで入力項目のstateを管理し、親コンポーネントで入力値を受け取るようにすることが良くある
 * バケツリレーを避ける場合はContext使用する
 * ReactHookFormなどのライブラリも独自のContextを提供している
 */
export const ImprovementReverseUseState = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])

  useEffect(() => {
    const fetchFn = async () => {
      const response = await fetch('/api/todos')
      const todoList = await response.json()
      setTodoList(todoList)
    }
    fetchFn()
  }, [])

  return (
    <>
      <h1>{todoList.length}件のTODO</h1>
      <TodoListChild todoList={todoList} />
    </>
  )
}

const TodoListChild = ({ todoList }: { todoList: Todo[] }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
