import { forwardRef } from 'react'
import { useField } from 'formik'
import { MuiRadioGroup, MuiRadioGroupProps } from '../../../Mui'
import FormHelperText from '../../FormHelperText'

export interface RadioGroupValidatorProps extends MuiRadioGroupProps {
  name?: string
}

const RadioGroupValidator = forwardRef<HTMLDivElement, RadioGroupValidatorProps>(
  ({ name, ...props }: RadioGroupValidatorProps, ref) => {
    const [field, meta, helpers] = useField(name as string)

    const error = Boolean(meta.touched && meta.error)
    const helperText = meta.touched ? meta.error : ''

    return (
      <div>
        <MuiRadioGroup
          ref={ref}
          {...props}
          value={field.value}
          onChange={(event) => helpers.setValue(event.target.value)}
        >
          {props.children}
        </MuiRadioGroup>
        {error && <FormHelperText error>{helperText}</FormHelperText>}
      </div>
    )
  },
)

export default RadioGroupValidator
