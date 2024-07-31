import { Formik, Form, FormikProps } from 'formik'
import * as yup from 'yup'
import {
  ContentLayout,
  Card,
  Button,
  Tabs,
  IconName,
  Space,
  TextFieldValidator,
  SelectValidator,
  AutocompleteValidator,
  DatePickerValidator,
  DateTimePickerValidator,
  TimePickerValidator,
  ColorPickerValidator,
  NumberInputValidator,
  CheckboxValidator,
  RadioValidator,
  RadioGroup,
  Divider,
  FormLabel,
  FormGroup,
  FormHelperText,
} from '../../components'

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
            <Tabs tabs={tabs} queryName='forms' />
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

const tabs = [
  { label: 'Form 1', value: 'form1', content: <FormContent1 /> },
  { label: 'Form 2', value: 'form2', content: <FormContent2 /> },
]

// const ProfileC = () => <>Profile ...</>
// const SettingsC = () => <>Settings ...</>
// const ClockC = () => <>Clock ...</>
// const RolesC = () => (
//   <Card title='Change Roles'>
//     <Tabs tabs={tabs2} queryName='roles' />
//   </Card>
// )
// const GeorgianC = () => <>Georgian ...</>
// const EnglishC = () => <>English ...</>
// const GermanC = () => <>German ...</>
// const FranceC = () => <>France ...</>

// const tabs = [
//   { label: 'Profile', value: 'profile', content: <ProfileC />, icon: 'Profile' as IconName },
//   { label: 'Settings', value: 'settings', content: <SettingsC />, icon: 'Setting2' as IconName, active: true },
//   { label: 'Clock', value: 'clock', content: <ClockC />, icon: 'Clock' as IconName },
//   { label: 'Roles', value: 'roles', content: <RolesC />, icon: 'Box1' as IconName },
// ]

// const tabs2 = [
//   { label: 'Georgian', value: 'georgian', content: <GeorgianC />, active: true },
//   { label: 'English', value: 'english', content: <EnglishC /> },
//   { label: 'German', value: 'german', content: <GermanC /> },
//   { label: 'France', value: 'france', content: <FranceC /> },
// ]
