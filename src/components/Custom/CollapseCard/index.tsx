import { useState, ReactNode, forwardRef } from 'react'
import Collapse from '../Collapse'
import Icon from '../Icon'

export interface CollapseCardProps {
  title: string
  subText?: string
  children: ReactNode
  open?: boolean
}

const CollapseCard = forwardRef<HTMLDivElement, CollapseCardProps>(
  ({ open = false, title, subText, children, ...props }: CollapseCardProps, ref) => {
    const [expanded, setExpanded] = useState<boolean>(open)
    const handleExpand = () => setExpanded(!expanded)

    return (
      <div ref={ref} {...props}>
        <div>
          {title}
          {subText}
          <Icon name={expanded ? 'Home' : 'Trash'} onClick={handleExpand} />
        </div>

        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <div>{children}</div>
        </Collapse>
      </div>
    )
  },
)

export default CollapseCard
