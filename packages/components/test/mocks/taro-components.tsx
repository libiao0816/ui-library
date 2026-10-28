import React from 'react'

// 把 Taro 组件映射成普通宿主元素，只保留测试需要的行为
// 映射到标准 HTML 元素，避免 jsdom 下 "unrecognized tag" 警告
function host(tag: string) {
  return React.forwardRef<any, any>((props, ref) => {
    const { children, hoverClass, hoverStartTime, ariaHidden, ...rest } = props
    return React.createElement(tag, { ...rest, ref }, children)
  })
}

export const View = host('div')
export const Text = host('span')
export const Button = host('button')
export const ScrollView = host('div')
export const Input = host('input')