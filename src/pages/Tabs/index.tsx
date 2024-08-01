import { Formik, Form, FormikProps } from 'formik'
import * as yup from 'yup'
import { ContentLayout, Card, Button, Tabs, CardActions, IconName, Space, TextFieldValidator } from '../../components'

const validationSchemaForm1 = yup.object({
  firstName: yup.string().trim().required('First Name Required'),
})

const validationSchemaForm2 = yup.object({
  email: yup.string().email('Invalid email').required('Email required'),
})

const initialValuesForm1 = {
  firstName: '',
}

const initialValuesForm2 = {
  email: '',
}

const TabsPage = () => {
  return (
    <ContentLayout label='Tabs Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Tabs (Form Validations)'>
            <Tabs tabs={tabs} queryName='tabs' />
          </Card>
        </div>
        <div className='col-6'>
          <Card>
            <Tabs tabs={tabs2} queryName='tabs2' />
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default TabsPage

const FormContent1 = () => (
  <Formik
    initialValues={initialValuesForm1}
    validationSchema={validationSchemaForm1}
    onSubmit={(values: typeof initialValuesForm1, actions: any) => {
      alert(JSON.stringify({ ...values }, null, 2))
      actions.setSubmitting(true)
      actions.resetForm()
    }}
  >
    {(props: FormikProps<typeof initialValuesForm1>) => (
      <Form>
        <Space>
          <TextFieldValidator label='First Name' name='firstName' />
        </Space>
        <CardActions>
          <Button variant='transparent' onClick={() => props.resetForm()}>
            Reset
          </Button>
          <Button type='submit'>Submit</Button>
        </CardActions>
      </Form>
    )}
  </Formik>
)

const FormContent2 = () => (
  <Formik
    initialValues={initialValuesForm2}
    validationSchema={validationSchemaForm2}
    onSubmit={(values: typeof initialValuesForm2, actions: any) => {
      alert(JSON.stringify({ ...values }, null, 2))
      actions.setSubmitting(true)
      actions.resetForm()
    }}
  >
    {(props: FormikProps<typeof initialValuesForm2>) => (
      <Form>
        <Space>
          <TextFieldValidator label='Email' name='email' />
        </Space>
        <CardActions>
          <Button variant='transparent' onClick={() => props.resetForm()}>
            Reset
          </Button>
          <Button type='submit'>Submit</Button>
        </CardActions>
      </Form>
    )}
  </Formik>
)

const tabs = [
  { label: 'Form 1', value: 'form1', content: <FormContent1 />, icon: 'Profile' as IconName },
  { label: 'Form 2', value: 'form2', content: <FormContent2 />, icon: 'Setting2' as IconName },
]

const FormContent3 = () => (
  <Formik
    initialValues={initialValuesForm1}
    validationSchema={validationSchemaForm1}
    onSubmit={(values: typeof initialValuesForm1, actions: any) => {
      alert(JSON.stringify({ ...values }, null, 2))
      actions.setSubmitting(true)
      actions.resetForm()
    }}
  >
    {(props: FormikProps<typeof initialValuesForm1>) => (
      <Form>
        <Card
          footerActions={
            <>
              <Button variant='transparent' onClick={() => props.resetForm()}>
                Reset
              </Button>
              <Button type='submit'>Submit</Button>
            </>
          }
        >
          <Space>
            <TextFieldValidator label='First Name' name='firstName' />
          </Space>
        </Card>
      </Form>
    )}
  </Formik>
)

const FormContent4 = () => (
  <Formik
    initialValues={initialValuesForm2}
    validationSchema={validationSchemaForm2}
    onSubmit={(values: typeof initialValuesForm2, actions: any) => {
      alert(JSON.stringify({ ...values }, null, 2))
      actions.setSubmitting(true)
      actions.resetForm()
    }}
  >
    {(props: FormikProps<typeof initialValuesForm2>) => (
      <Form>
        <Card
          footerActions={
            <>
              <Button variant='transparent' onClick={() => props.resetForm()}>
                Reset
              </Button>
              <Button type='submit'>Submit</Button>
            </>
          }
        >
        <Space>
          <TextFieldValidator label='Email' name='email' />
        </Space>
        </Card>
      </Form>
    )}
  </Formik>
)

const tabs2 = [
  { label: 'Form 1', value: 'form1', content: <FormContent3 />, icon: 'Profile' as IconName },
  { label: 'Form 2', value: 'form2', content: <FormContent4 />, icon: 'Setting2' as IconName },
]
