import type { NextPage } from 'next'
import {
  ImprovementStateClosure,
  ImprovementUseReducerCounter
} from './ImprovementStateClosure'

const Page: NextPage = () => {
  return (
    <div>
      <h1>State-closure</h1>
      <ImprovementStateClosure />
      <ImprovementUseReducerCounter />
    </div>
  )
}

export default Page
