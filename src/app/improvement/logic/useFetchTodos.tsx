import { useEffect, useState } from 'react'

type Todo = {
  id: string
  title: string
  description: string
  deadline: string
}

/**
 * 今回はapp配下に作成しているが、実際には別ディレクトリに作成した方が尚良い
 * ロジックの詳細がコンポーネントに影響しないのであれば、カスタムフックとして切り出せるが、チーム開発においてはルールを決めておく必要がある
 */
export const useFetchTodos = () => {
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

  useEffect(() => {
    setQuery((prev) => ({
      ...prev,
      isLoading: true
    }))
    const fetchFn = async () => {
      try {
        const response = await fetch(`/api/todos&filter=${filterStatus}`)
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
  }, [filterStatus])

  const { error, todoList, isLoading } = query
  return {
    error,
    todoList,
    isLoading,
    onFilter: setFilterStatus
  }
}
