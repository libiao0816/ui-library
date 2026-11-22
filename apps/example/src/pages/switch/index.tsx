import { View, Text } from '@tarojs/components'
import { LbSwitch } from 'lb-taro-ui'
import { useState } from 'react'
import 'lb-taro-ui/style/components/switch/index.scss'
import './index.scss'

export default function SwitchDemo() {
  const [checked, setChecked] = useState(false)

  return (
    <View className="demo-page">
      <View className="demo-section">
        <Text className="demo-section__title">基础用法（非受控）</Text>
        <LbSwitch defaultChecked onChange={next => console.log('[非受控] onChange:', next)} />
      </View>

      <View className="demo-section">
        <Text className="demo-section__title">受控用法</Text>
        <LbSwitch checked={checked} onChange={next => setChecked(next)} />
        <Text className="demo-section__hint">当前：{checked ? '开' : '关'}</Text>
      </View>

      <View className="demo-section">
        <Text className="demo-section__title">禁用状态</Text>
        <View className="demo-row">
          <LbSwitch disabled />
          <LbSwitch disabled defaultChecked />
        </View>
      </View>

      <View className="demo-section">
        <Text className="demo-section__title">加载中</Text>
        <View className="demo-row">
          <LbSwitch loading />
          <LbSwitch loading defaultChecked />
        </View>
      </View>

      <View className="demo-section">
        <Text className="demo-section__title">小尺寸</Text>
        <View className="demo-row">
          <LbSwitch size="small" />
          <LbSwitch size="small" defaultChecked />
        </View>
      </View>

      <View className="demo-section">
        <Text className="demo-section__title">自定义颜色</Text>
        <View className="demo-row">
          <LbSwitch defaultChecked color="#07c160" />
          <LbSwitch defaultChecked color="#ee0a24" />
          <LbSwitch defaultChecked color="#1989fa" />
        </View>
      </View>
    </View>
  )
}
