import { View, Text } from '@tarojs/components'
import { Switch } from '@lb/taro-ui'
import { useState } from 'react'
import './index.scss'

export default function SwitchDemo() {
  const [checked, setChecked] = useState(false)

  return (
    <View className='demo-page'>
      <View className='demo-section'>
        <Text className='demo-section__title'>基础用法（非受控）</Text>
        <Switch defaultChecked onChange={(next) => console.log('[非受控] onChange:', next)} />
      </View>

      <View className='demo-section'>
        <Text className='demo-section__title'>受控用法</Text>
        <Switch checked={checked} onChange={(next) => setChecked(next)} />
        <Text className='demo-section__hint'>当前：{checked ? '开' : '关'}</Text>
      </View>

      <View className='demo-section'>
        <Text className='demo-section__title'>禁用状态</Text>
        <View className='demo-row'>
          <Switch disabled />
          <Switch disabled defaultChecked />
        </View>
      </View>

      <View className='demo-section'>
        <Text className='demo-section__title'>加载中</Text>
        <View className='demo-row'>
          <Switch loading />
          <Switch loading defaultChecked />
        </View>
      </View>

      <View className='demo-section'>
        <Text className='demo-section__title'>小尺寸</Text>
        <View className='demo-row'>
          <Switch size='small' />
          <Switch size='small' defaultChecked />
        </View>
      </View>

      <View className='demo-section'>
        <Text className='demo-section__title'>自定义颜色</Text>
        <View className='demo-row'>
          <Switch defaultChecked color='#07c160' />
          <Switch defaultChecked color='#ee0a24' />
          <Switch defaultChecked color='#1989fa' />
        </View>
      </View>
    </View>
  )
}
