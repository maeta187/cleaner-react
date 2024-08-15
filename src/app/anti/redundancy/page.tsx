import type { NextPage } from 'next'
import { AntiRedundancyUseEffect } from './AntiRedundancyUseEffect'

const Page: NextPage = () => {
  return (
    <div>
      <h1>Redundancy-useEffect</h1>
      <AntiRedundancyUseEffect />
    </div>
  )
}

export default Page
