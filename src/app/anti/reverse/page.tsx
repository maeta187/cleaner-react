import type { NextPage } from 'next'
import { AntiTodoListParent } from './AntiReverseUseState'

const Page: NextPage = () => {
  return (
    <div>
      <h1>Reverse-useState</h1>
      <AntiTodoListParent />
    </div>
  )
}

export default Page
