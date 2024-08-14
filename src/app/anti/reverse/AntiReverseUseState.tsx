'use client'

import { useEffect, useState } from 'react'

/**
 * 親コンポーネントから子コンポーネントへSetterを渡してる
 * 子コンポーネントのuseEffect内でSetterを呼び出しているのでデーデータフローを辿るのが難しい
 * また、stateの値は単一のコンポーネントが保持し、他のコンポーネントで重複して保持することは避けるべき
 */
export const AntiTodoListParent = () => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [todoListData, setTodoListData] = useState<any[]>([])

  return (
    <>
      <h1>{todoListData.length}件のTODO</h1>
      <TodoListChild onFetched={setTodoListData} />
    </>
  )
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const TodoListChild = ({ onFetched }: { onFetched: (data: any[]) => void }) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [todoList, setTodoList] = useState<any[]>([])

  useEffect(() => {
    const fetchFn = async () => {
      const response = await fetch('/api/todos')
      const todoListResponse = await response.json()
      setTodoList(todoListResponse)
      onFetched(todoListResponse)
    }
    fetchFn()
  }, [onFetched])

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
