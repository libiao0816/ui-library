import { View, Text } from '@tarojs/components'
import { LbButton } from '@lb/taro-ui'
import '@lb/taro-ui/style/components/button/index.scss'
import './index.scss'

export default function ButtonDemo() {
  return (
    <View className='demo-page'>
      <View className='demo-section'>
        <Text className='demo-section__title'>按钮类型</Text>
        <View className='demo-row'>
          <LbButton onClick={() => console.log('[LbButton] click')}>默认按钮</LbButton>
          <LbButton variant='primary'>主要按钮</LbButton>
          <LbButton variant='danger'>危险按钮</LbButton>
          <LbButton variant='text'>文字按钮</LbButton>
        </View>
      </View>

      <View className='demo-section'>
        <Text className='demo-section__title'>按钮尺寸</Text>
        <View className='demo-row'>
          <LbButton variant='primary' size='large'>大号按钮</LbButton>
          <LbButton variant='primary' size='small'>小号按钮</LbButton>
        </View>
      </View>

      <View className='demo-section'>
        <Text className='demo-section__title'>按钮状态</Text>
        <View className='demo-row'>
          <LbButton variant='primary' loading>加载中</LbButton>
          <LbButton variant='primary' disabled>禁用按钮</LbButton>
        </View>
      </View>

      <View className='demo-section'>
        <Text className='demo-section__title'>块级按钮</Text>
        <LbButton variant='primary' block>块级按钮</LbButton>
      </View>
    </View>
  )
}
