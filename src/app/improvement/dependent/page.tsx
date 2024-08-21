import { NextPage } from 'next'
import { ImprovementDependentArray , AnotherImprovementDependentArray} from './ImprovementDependentArray'

const Page: NextPage = () => {
  return (
    <div>
      <h1>Dependent-Array</h1>
      <ImprovementDependentArray />
      <AnotherImprovementDependentArray />
    </div>
  )
}

export default Page
