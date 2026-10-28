import { View, Text } from '@tarojs/components'
import { Button } from '@lb/taro-ui'
import './index.scss'

export default function ButtonDemo() {
  return (
    <View className='demo-page'>
      <View className='demo-section'>
        <Text className='demo-section__title'>按钮类型</Text>
        <View className='demo-row'>
          <Button onClick={() => console.log('[Button] click')}>默认按钮</Button>
          <Button variant='primary'>主要按钮</Button>
          <Button variant='danger'>危险按钮</Button>
          <Button variant='text'>文字按钮</Button>
        </View>
      </View>

      <View className='demo-section'>
        <Text className='demo-section__title'>按钮尺寸</Text>
        <View className='demo-row'>
          <Button variant='primary' size='large'>大号按钮</Button>
          <Button variant='primary' size='small'>小号按钮</Button>
        </View>
      </View>

      <View className='demo-section'>
        <Text className='demo-section__title'>按钮状态</Text>
        <View className='demo-row'>
          <Button variant='primary' loading>加载中</Button>
          <Button variant='primary' disabled>禁用按钮</Button>
        </View>
      </View>

      <View className='demo-section'>
        <Text className='demo-section__title'>块级按钮</Text>
        <Button variant='primary' block>块级按钮</Button>
      </View>
    </View>
  )
}
