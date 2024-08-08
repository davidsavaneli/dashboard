import { Suspense } from 'react'
import ComponentLoader from '../ComponentLoader'

const Loadable = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
  return (props: any) => (
    <Suspense fallback={<ComponentLoader componentType='page' />}>
      <Component {...props} />
    </Suspense>
  )
}

export default Loadable
