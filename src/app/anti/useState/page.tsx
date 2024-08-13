
'use client'

import type { NextPage } from 'next'
import { useState } from 'react'

const antiUseState: NextPage = () => {
/**
 * useStateの多用で可読性が下がる
 * useStateの多用も問題だが、いつstateが更新されるかを追いにくい
 * 一旦の改善としては用途ごとにコメントを付けてまとめる
 * だが根本的な解決にはならない
 */
  const [error, setError] = useState(null)
  const [status, setStatus] = useState("")
  const [todo, setTodo] = useState("")
  const [deadline, setDeadline] = useState("")
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [todoList, setTodoList] = useState("")
  // const [createTodoModalIsOpen, setCreateTodModalIsOpen] = useState(false)

/**
 * 用途毎にオブジェクトにしてまとめることで可読性が向上する
 * 同時に更新されることが多いならオブジェクトの方が適しているが、別々で更新されるなら分けた方が良い
 */
  const [todoListQuery, setTodoListQuery] = useState({
    data: undefined,
    isLoading: false,
    error: null
  })

  const [todoForm, setTodoForm] = useState({
    todoTitle: "",
    description: "",
    estimatedTime: 0,
    status: "",
    deadline: "",
  })

  const [createTodoModalIsOpen, setCreateTodModalIsOpen] = useState(false)

  return (
    <div>
      <h1>Anti-useState</h1>
    </div>
  )
}

export default antiUseState