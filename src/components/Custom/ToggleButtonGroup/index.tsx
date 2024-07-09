import { forwardRef } from 'react'
import { MuiToggleButtonGroup, MuiToggleButtonGroupProps } from '../../Mui'
import clsx from 'clsx'

export interface ToggleButtonGroupProps extends MuiToggleButtonGroupProps {}

const ToggleButtonGroup = forwardRef<HTMLDivElement, ToggleButtonGroupProps>(
  ({ ...props }: ToggleButtonGroupProps, ref) => {
    return (
      <MuiToggleButtonGroup
        ref={ref}
        {...props}
        className={clsx({
          ['MuiToggleButtonGroup-hotizontal']: props.orientation !== 'vertical',
        })}
      />
    )
  },
)

export default ToggleButtonGroup
