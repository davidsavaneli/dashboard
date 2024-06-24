import React, { memo } from 'react'
import clsx from 'clsx'
import Icon from '../Icon'
import styles from './styles.module.css'

export type MDAlertProps = {
  iconName?: string
  title?: string
  text?: string
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info'
}

const MDAlert = ({ title, text, iconName, variant = 'default' }: MDAlertProps) => {
  return (
    <div>
      <div>
        {title && <div>{title}</div>}
        {text && <div>{text}</div>}
      </div>
    </div>
  )
}

export default memo(MDAlert)
