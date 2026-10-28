import classnames from 'classnames'
import { View } from '@tarojs/components'
import type { ButtonProps } from './types'

export default function Button(props: ButtonProps) {

  const {
    variant = 'default',
    size = 'normal',
    block = false,
    loading = false,
    disabled = false,
    className = '',
    children,
    onClick,
    ...rest
  } = props

  const classNames = [
    'lb-button',
    `lb-button--${size}`,
    `lb-button--${variant}`,
    {
      'lb-button--block': block,
      'lb-button--disabled': disabled,
      'lb-button--loading': loading,
    },
    className,
  ]

  return (
    <View
      className={classnames(...classNames)}
      {...rest}
      onClick={() => {
        if (disabled || loading) return
        onClick?.()
      }}
    >
      {loading && <View className='lb-button__loading' />}
      <View className='lb-button__content'>{children}</View>
    </View>
  )
}
