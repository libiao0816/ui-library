import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

const demos = [
  { title: 'Button 按钮', path: '/pages/button/index' },
  { title: 'Switch 开关', path: '/pages/switch/index' },
]

export default function Index() {
  const handleGo = (path: string) => {
    Taro.navigateTo({ url: path })
  }

  return (
    <View className='index'>
      <Text className='index__title'>lb-ui 组件示例</Text>
      <View className='index__list'>
        {demos.map((d) => (
          <View key={d.path} className='index__item' onClick={() => handleGo(d.path)}>
            <Text>{d.title}</Text>
            <Text className='index__arrow'>›</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
