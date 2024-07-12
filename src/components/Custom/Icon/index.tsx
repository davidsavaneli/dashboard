import { IconProps as IconsaxIconProps } from 'iconsax-react'
import clsx from 'clsx'
import {
  Home,
  Home2,
  HambergerMenu,
  More,
  Trash,
  TickSquare,
  Eye,
  EyeSlash,
  ArrowDown2,
  ArrowUp2,
  Add,
  AddCircle,
  AddSquare,
  Edit,
  ArrowCircleDown,
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleUp,
  Bag2,
  Box1,
  Calendar,
  Card,
  Category,
  Chart,
  Chart1,
  Clock,
  CloseSquare,
  Copy,
  Danger,
  Diagram,
  Document,
  Filter,
  FilterSquare,
  Gallery,
  Global,
  InfoCircle,
  Location,
  LoginCurve,
  LogoutCurve,
  Menu,
  Minus,
  MinusCirlce,
  MinusSquare,
  MoreCircle,
  MoreSquare,
  Notification,
  Profile,
  Profile2User,
  RefreshSquare,
  Scroll,
  SearchNormal,
  Setting4,
  ShieldTick,
  ShieldCross,
  Sort,
  User,
  Verify,
  Setting2,
  HomeTrendUp,
  NoteRemove,
  NoteText,
  ElementEqual,
  Element4,
  Grid3,
  I3Square,
  ArrowSquareDown,
  CloseCircle,
} from 'iconsax-react'
import styles from './styles.module.css'

const Icons = {
  Home,
  Home2,
  HambergerMenu,
  More,
  Trash,
  TickSquare,
  Eye,
  EyeSlash,
  ArrowDown2,
  ArrowUp2,
  Add,
  AddCircle,
  AddSquare,
  Edit,
  ArrowCircleDown,
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleUp,
  Bag2,
  Box1,
  Calendar,
  Card,
  Category,
  Chart,
  Chart1,
  Clock,
  CloseSquare,
  Copy,
  Danger,
  Diagram,
  Document,
  Filter,
  FilterSquare,
  Gallery,
  Global,
  InfoCircle,
  Location,
  LoginCurve,
  LogoutCurve,
  Menu,
  Minus,
  MinusCirlce,
  MinusSquare,
  MoreCircle,
  MoreSquare,
  Notification,
  Profile,
  Profile2User,
  RefreshSquare,
  Scroll,
  SearchNormal,
  Setting4,
  ShieldTick,
  ShieldCross,
  Sort,
  User,
  Verify,
  Setting2,
  HomeTrendUp,
  NoteRemove,
  NoteText,
  ElementEqual,
  Element4,
  Grid3,
  I3Square,
  ArrowSquareDown,
  CloseCircle,
}

export type IconName = keyof typeof Icons

export interface IconProps extends IconsaxIconProps {
  name: IconName
  color?:
    | 'primary'
    | 'primaryLight'
    | 'secondary'
    | 'dark'
    | 'medium'
    | 'light'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'Linear' | 'Outline' | 'Broken' | 'Bold' | 'Bulk' | 'TwoTone'
}

const Icon = ({ name, size = 'md', color = 'primary', variant = 'Linear', ...props }: IconProps) => {
  const IconComponent = Icons[name]

  const classNames = clsx(styles.icon, {
    [styles.colorPrimary]: color === 'primary',
    [styles.colorPrimaryLight]: color === 'primaryLight',
    [styles.colorSecondary]: color === 'secondary',
    [styles.colorDark]: color === 'dark',
    [styles.colorMedium]: color === 'medium',
    [styles.colorLight]: color === 'light',
    [styles.colorSuccess]: color === 'success',
    [styles.colorError]: color === 'error',
    [styles.colorInfo]: color === 'info',
    [styles.colorWarning]: color === 'warning',
    [styles.sizeSm]: size === 'sm',
    [styles.sizeMd]: size === 'md',
    [styles.sizeLg]: size === 'lg',
  })

  return IconComponent ? <IconComponent className={classNames} variant={variant} {...props} /> : null
}

export default Icon
