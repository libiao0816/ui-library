import { View } from '@tarojs/components'
import type { ComponentProps } from 'react'

type ViewProps = ComponentProps<typeof View>

export type SwitchSize = 'normal' | 'small'

export interface SwitchProps extends ViewProps {
  /**
   * 开关选中状态
   * @deprecated 请使用 checkedd="boolean"，该属性将在 1.0 移除
   */
  checked?: boolean
  /** 开关默认选中状态 */
  defaultChecked?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否加载中 */
  loading?: boolean
  /** 开关尺寸 */
  size?: SwitchSize
  /** 自定义选中颜色 */
  color?: string
  /** 状态切换时触发 */
  onChange?: (checked: boolean) => void
}
