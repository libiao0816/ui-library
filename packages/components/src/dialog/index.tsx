import classnames from 'classnames'
import { View } from '@tarojs/components'
import { LbButton } from '../button'
import type { DialogProps } from './types'

export function LbDialog(props: DialogProps) {
  const {
    visible = false,
    title,
    children,
    showCancel = true,
    cancelText = '取消',
    confirmText = '确认',
    closeOnClickMask = true,
    className = '',
    onCancel,
    onConfirm,
    onClose,
    ...rest
  } = props

  if (!visible) return null

  const handleMaskClick = () => {
    if (closeOnClickMask) onClose?.()
  }

  const handleCancel = () => {
    onCancel?.()
    onClose?.()
  }

  const handleConfirm = () => {
    onConfirm?.()
    onClose?.()
  }

  return (
    <View className={classnames('lb-dialog', className)} {...rest}>
      <View className="lb-dialog__mask" onClick={handleMaskClick} />
      <View className="lb-dialog__container" ariaRole="dialog">
        {title && <View className="lb-dialog__title">{title}</View>}
        <View className="lb-dialog__content">{children}</View>
        <View className="lb-dialog__footer">
          {showCancel && (
            <LbButton block onClick={handleCancel}>
              {cancelText}
            </LbButton>
          )}
          <LbButton block variant="primary" onClick={handleConfirm}>
            {confirmText}
          </LbButton>
        </View>
      </View>
    </View>
  )
}

export type { DialogProps } from './types'
