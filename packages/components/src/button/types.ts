import { View } from '@tarojs/components'
import type { ComponentProps, ReactNode } from 'react'

type ViewProps = ComponentProps<typeof View>

export type ButtonSize = 'large' | 'normal' | 'small'

export type ButtonType = 'primary' | 'default' | 'text' | 'danger'

export interface ButtonProps extends Omit<ViewProps, 'children'> {
  /** 按钮尺寸 */
  size?: ButtonSize
  /** 按钮类型 */
  variant?: ButtonType
  /** 按钮是否禁用 */
  disabled?: boolean
  /** 按钮是否加载中 */
  loading?: boolean
  /** 按钮点击事件 */
  onClick?: () => void
  /** 按钮文本 */
  children?: ReactNode
  /** 按钮是否为块级元素 */
  block?: boolean
}
