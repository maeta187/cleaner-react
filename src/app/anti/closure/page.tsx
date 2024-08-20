import type { NextPage } from 'next'
import { AntiStateClosure } from './AntiStateClosure'

const Page: NextPage = () => {
  return (
    <div>
      <h1>State-closure</h1>
      <AntiStateClosure />
    </div>
  )
}

export default Page
