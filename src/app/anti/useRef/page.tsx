import { NextPage } from 'next'
import { AntiUseRef } from './AntiUseRef'

const Page: NextPage = () => {
  return (
    <div>
      <h1>Anti-useRef</h1>
      <AntiUseRef />
    </div>
  )
}

export default Page
