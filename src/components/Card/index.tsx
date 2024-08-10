import { ReactNode, useState } from 'react'
import clsx from 'clsx'
import Title from '../Title'
import Collapse from '../Collapse'
import IconButton from '../IconButton'
import { IconName, IconProps } from '../Icon'
import TranslationText from '../TranslationText'

import styles from './styles.module.css'

export interface CardProps {
  title?: string
  icon?: IconName
  iconColor?: IconProps['color']
  iconVariant?: IconProps['variant']
  headerActions?: ReactNode
  footerActions?: ReactNode
  children: ReactNode
  collapse?: boolean
  open?: boolean
  disableHeaderLine?: boolean
}

const Card = ({
  title,
  icon,
  iconColor = 'medium',
  iconVariant = 'Linear',
  headerActions,
  footerActions,
  children,
  collapse = false,
  open = false,
  disableHeaderLine = false,
}: CardProps) => {
  const [expanded, setExpanded] = useState<boolean>(open)

  const handleExpand = () => setExpanded((prev) => !prev)

  return (
    <div
      className={clsx(styles.card, {
        [styles.disableHeaderLine]: disableHeaderLine,
      })}
    >
      {(title || icon || headerActions || collapse) && (
        <div className={clsx(styles.header, collapse && !expanded && styles.unExpanded)}>
          <div className={styles.cardTitle}>
            {icon && (
              <div className={styles.icon}>
                <IconButton iconName={icon} variant='filled' color={iconColor} iconVariant={iconVariant} />
              </div>
            )}
            {title && <Title variant='h5'>{title}</Title>}
          </div>
          {headerActions && <div className={styles.headerActions}>{headerActions}</div>}
          {collapse && (
            <IconButton
              iconName={expanded ? 'ArrowCircleUp' : 'ArrowCircleDown'}
              tooltipTitle={expanded ? <TranslationText text={'hide'} /> : <TranslationText text={'show'} />}
              onClick={handleExpand}
            />
          )}
        </div>
      )}
      <Collapse in={collapse ? expanded : true}>
        <ContentAndActions children={children} footerActions={footerActions} />
      </Collapse>
    </div>
  )
}

interface ContentAndActionsProps extends Pick<CardProps, 'children' | 'footerActions'> {}

const ContentAndActions = ({ children, footerActions }: ContentAndActionsProps) => (
  <>
    <div className={styles.content}>{children}</div>
    {footerActions && <div className={styles.footerActions}>{footerActions}</div>}
  </>
)

export default Card
