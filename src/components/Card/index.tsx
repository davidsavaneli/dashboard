import { ReactNode, useState } from 'react'
import clsx from 'clsx'
import Title from '../Title'
import Collapse from '../Collapse'
import IconButton from '../IconButton'

import styles from './styles.module.css'

export interface CardProps {
  title?: string
  headerActions?: ReactNode
  footerActions?: ReactNode
  children: ReactNode
  collapse?: boolean
  open?: boolean
}

const Card = ({ title, headerActions, footerActions, children, collapse = false, open = false }: CardProps) => {
  const [expanded, setExpanded] = useState<boolean>(open)

  const handleExpand = () => setExpanded((prev) => !prev)

  return (
    <div className={styles.card}>
      {(title || headerActions || collapse) && (
        <div className={clsx(styles.header, collapse && !expanded && styles.unExpanded)}>
          <div className={styles.cardTitle}>{title && <Title variant='h4'>{title}</Title>}</div>
          {headerActions && <div className={styles.headerActions}>{headerActions}</div>}
          {collapse && <IconButton iconName={expanded ? 'ArrowCircleUp' : 'ArrowCircleDown'} onClick={handleExpand} />}
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
