'use client'

import type { NextPage } from 'next'
import { useState } from 'react'

export const ImprovementUseState: NextPage = () => {
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
    todoTitle: '',
    description: '',
    estimatedTime: 0,
    status: '',
    deadline: ''
  })

  const [createTodoModalIsOpen, setCreateTodModalIsOpen] = useState(false)

  return (
    <div>
      <h1>Improvement-UseState</h1>
    </div>
  )
}
