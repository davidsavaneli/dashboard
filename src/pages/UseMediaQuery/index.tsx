import { ContentLayout } from '../../components'
import { useMediaQuery } from '../../hooks'

const UseThemePage = () => {
  const xxl = useMediaQuery('xxl')
  const xl = useMediaQuery('xl')
  const lg = useMediaQuery('lg')
  const md = useMediaQuery('md')
  const sm = useMediaQuery('sm')
  const xs = useMediaQuery('xs')
  const xxs = useMediaQuery('xxs')

  return (
    <ContentLayout label='useMediaQuery Hook'>
      {xxl ? 'xxl' : ''}
      <br />
      {xl ? 'xl' : ''}
      <br />
      {lg ? 'lg' : ''}
      <br />
      {md ? 'md' : ''}
      <br />
      {sm ? 'sm' : ''}
      <br />
      {xs ? 'xs' : ''}
      <br />
      {xxs ? 'xxs' : ''}
    </ContentLayout>
  )
}

export default UseThemePage
