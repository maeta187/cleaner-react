import { NextPage } from 'next'
import {
  PitfallComponents,
  ImprovementDifferentComponentsTodo
} from './ImprovementDifferentComponents'

const Page: NextPage = () => {
  return (
    <div>
      <h1>Different-Components</h1>
      <PitfallComponents />
      <ImprovementDifferentComponentsTodo />
    </div>
  )
}

export default Page
