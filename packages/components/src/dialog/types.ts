import { View } from '@tarojs/components'
import type { ComponentProps, ReactNode } from 'react'

type ViewProps = ComponentProps<typeof View>

export interface DialogProps extends Omit<ViewProps, 'children'> {
  /** 是否显示对话框 */
  visible?: boolean
  /** 对话框标题 */
  title?: ReactNode
  /** 对话框内容 */
  children?: ReactNode
  /** 是否显示取消按钮 */
  showCancel?: boolean
  /** 取消按钮文案 */
  cancelText?: string
  /** 确认按钮文案 */
  confirmText?: string
  /** 点击遮罩层是否关闭对话框 */
  closeOnClickMask?: boolean
  /** 点击取消按钮时触发 */
  onCancel?: () => void
  /** 点击确认按钮时触发 */
  onConfirm?: () => void
  /** 请求关闭时触发（点击遮罩 / 取消 / 确认） */
  onClose?: () => void
}
