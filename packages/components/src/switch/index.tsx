import classnames from 'classnames'
import { View } from '@tarojs/components'
import useControllableState from '../hooks/use-controllable-state'
import type { SwitchProps } from './types'

export default function Switch(props: SwitchProps) {

  const {
    checked,
    defaultChecked = false,
    disabled = false,
    loading = false,
    size = 'normal',
    color,
    className = '',
    onChange,
    ...rest
  } = props

  const [innerChecked, setInnerChecked] = useControllableState(checked, defaultChecked, onChange)

  const classNames = [
    'lb-switch',
    `lb-switch--${size}`,
    {
      'lb-switch--checked': innerChecked,
      'lb-switch--disabled': disabled,
      'lb-switch--loading': loading,
    },
    className,
  ]

  const nodeStyle = color && innerChecked && !disabled ? { backgroundColor: color } : {}

  return (
    <View
      className={classnames(...classNames)}
      style={nodeStyle}
      {...rest}
      onClick={() => setInnerChecked(!innerChecked)}
    >
      <View className='lb-switch__node'>
        <View className='lb-switch__icon' />
      </View>
    </View>
  )
}
