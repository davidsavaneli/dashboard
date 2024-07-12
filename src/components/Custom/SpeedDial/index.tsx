import { forwardRef } from 'react'
import { MuiSpeedDial, MuiSpeedDialProps } from '../../Mui'
import Fab, { FabProps } from '../Fab'

import './styles.css'

export interface SpeedDialProps extends MuiSpeedDialProps {
  FabProps?: FabProps
}

const SpeedDial = forwardRef<HTMLButtonElement, SpeedDialProps>(({ FabProps, ...props }: SpeedDialProps, ref) => {
  return (
    <MuiSpeedDial
      ref={ref}
      icon={<Fab color='medium' size={FabProps?.size || 'lg'} iconName={FabProps?.iconName || 'Add'} {...FabProps} />}
      {...props}
    />
  )
})

export default SpeedDial
