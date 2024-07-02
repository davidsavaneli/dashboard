import { ContentLayout, Card, CollapseCard } from '../../components'

const CollapseCardPage = () => {
  return (
    <ContentLayout label='Collapse Card Page'>
      <Card title='Collapse Card'>
        <CollapseCard title='Collapse Card Title'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas temporibus autem laborum. Unde rem dolore est
          mollitia pariatur ullam adipisci velit corporis vitae itaque animi quaerat.
        </CollapseCard>
      </Card>
    </ContentLayout>
  )
}

export default CollapseCardPage
