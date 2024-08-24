import { NextPage } from 'next'
import {
  AntiDifferentComponentsTodo,
  PitfallComponents
} from './AntiDifferentComponents'

const Page: NextPage = () => {
  return (
    <div>
      <h1>Different-Components</h1>
      <PitfallComponents />
      <AntiDifferentComponentsTodo />
    </div>
  )
}

export default Page
