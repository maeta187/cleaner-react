'use client'

import { useState, useEffect } from 'react'

type Todo = {
  id: string
  title: string
  description: string
  deadline: string
}

/**
 * コンポーネントを「実行方法ではなく、実行したいことを記述している」形にするのが理想形
 * 外部システムやブラウザ＝APIの処理はできるだけコンポーネントの外に出して隠すようにする
 * また、コンポーネントに必要ないロジックを持たせると、単体テストが難しいまたは不可能になる
 */
export const AntiLogic = () => {
  const [query, setQuery] = useState<{
    isLoading: boolean
    error: Error | null
    todoList: Todo[]
  }>({
    isLoading: false,
    error: null,
    todoList: []
  })

  const [filterStatus, setFilterStatus] = useState('DOING')
  const handleSelectFilterStatus = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterStatus(e.target.value)
  }
  const handleSubmitStatusFilter = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/todos&${filterStatus}`, {
        method: 'GET'
      })
      const todoList = await response.json()
      setQuery((prev) => ({
        ...prev,
        isLoading: false,
        todoList
      }))
    } catch (error) {
      setQuery((prev) => ({
        ...prev,
        isLoading: false,
        error: error as Error
      }))
    }
  }

  useEffect(() => {
    setQuery((prev) => ({
      ...prev,
      isLoading: true
    }))
    const fetchFn = async () => {
      try {
        const response = await fetch('/api/todos', { method: 'GET' })
        const todoList = await response.json()
        setQuery((prev) => ({
          ...prev,
          isLoading: false,
          todoList
        }))
      } catch (error) {
        setQuery((prev) => ({
          ...prev,
          isLoading: false,
          error: error as Error
        }))
      }
    }
    fetchFn()
  }, [])

  if (query.isLoading || !query.todoList) {
    return <p>now on loading...</p>
  }

  return (
    <div>
      <form className='todoFilter' onSubmit={handleSubmitStatusFilter}>
        <select value={filterStatus} onChange={handleSelectFilterStatus}>
          <option value='DOING'>今日やること</option>
          <option value='PARKING'>いつかやること</option>
          <option value='DONE'>できたこと</option>
        </select>
        <button type='submit'>絞り込み</button>
      </form>
      <ul className='todoList'>
        {query.todoList.map((todo) => (
          <li key={todo.id}>
            <h2 className='todoTitle'>{todo.title}</h2>
            <p className='todoDescription'>{todo.description}</p>
            <p className='totoDeadline'>{todo.deadline}</p>
            <button className='primaryButton' type='button'>
              <i className='fa-edit' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
