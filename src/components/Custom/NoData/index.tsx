import { memo } from 'react'
import Icon, { IconName } from '../Icon'

export interface NoDataProps {
  iconName?: IconName
  text?: string
  disableIcon?: boolean
}

const NoData = ({ text = '', iconName = 'Home', disableIcon = false }: NoDataProps) => {
  return (
    <div>
      {!disableIcon && <Icon name={iconName} />}
      {text && <div>{text}</div>}
    </div>
  )
}

export default memo<NoDataProps>(NoData)
