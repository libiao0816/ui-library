# @lb/taro-ui

面向 Taro 4 + React 18 小程序的基础组件库。

## 环境要求

- Taro >= 4.0
- React >= 18
- 设计稿基准：750（designWidth: 750）

## 安装

```bash
pnpm add @lb/taro-ui
```

## 使用

```tsx
import { Button } from '@lb/taro-ui'
import '@lb/taro-ui/style/components/button.scss'

export default function Demo() {
  return <Button variant="primary">提交</Button>
}
```

## API

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| variant | 'primary' \\| 'default' \\| 'text' \\| 'danger' | 'default' | 视觉变体 |
| size | 'large' \\| 'normal' \\| 'small' | 'normal' | 尺寸 |
| block | boolean | false | 是否占满整行 |
| loading | boolean | false | 加载态 |
| disabled | boolean | false | 禁用态 |
| className | string | '' | 追加类名 |
| onClick | (e: ITouchEvent) => void | - | 点击回调 |

## 主题

在组件库样式之后引入你的主题文件：

```ts
import '@lb/taro-ui/style/index.scss'
import './theme.scss'
```

```scss
page {
  --lb-color-primary: #ff6b00;
}
```

## 兼容性

- 微信小程序、H5
- 不支持：RN（暂未验证）
- Button 为 View 实现：不支持 openType / formType，需要时请直接使用 Taro 原生 Button

## 变更记录

见 [CHANGELOG.md](./CHANGELOG.md)。