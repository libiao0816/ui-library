import { fireEvent, render } from '@testing-library/react'
import { LbSwitch } from './index'

describe('Switch', () => {
  it('渲染基础结构', () => {
    const { container } = render(<LbSwitch />)
    expect(container.querySelector('.lb-switch')).toBeTruthy()
    expect(container.querySelector('.lb-switch__node')).toBeTruthy()
    expect(container.querySelector('.lb-switch__icon')).toBeTruthy()
  })

  it('默认未选中', () => {
    const { container } = render(<LbSwitch />)
    expect(container.querySelector('.lb-switch--checked')).toBeFalsy()
  })

  it('defaultChecked 渲染选中态', () => {
    const { container } = render(<LbSwitch defaultChecked />)
    expect(container.querySelector('.lb-switch--checked')).toBeTruthy()
  })

  it('点击切换选中状态', () => {
    const { container } = render(<LbSwitch />)
    const el = container.querySelector('.lb-switch')!
    fireEvent.click(el)
    expect(el.classList.contains('lb-switch--checked')).toBe(true)
    fireEvent.click(el)
    expect(el.classList.contains('lb-switch--checked')).toBe(false)
  })

  it('点击触发 onChange 并携带新状态', () => {
    const onChange = jest.fn()
    const { container } = render(<LbSwitch onChange={onChange} />)
    const el = container.querySelector('.lb-switch')!
    fireEvent.click(el)
    expect(onChange).toHaveBeenLastCalledWith(true)
    fireEvent.click(el)
    expect(onChange).toHaveBeenLastCalledWith(false)
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  it('受控 checked 由外部值决定', () => {
    const onChange = jest.fn()
    const { container, rerender } = render(<LbSwitch checked={false} onChange={onChange} />)
    const el = container.querySelector('.lb-switch')!
    fireEvent.click(el)
    expect(onChange).toHaveBeenCalledWith(true)
    expect(el.classList.contains('lb-switch--checked')).toBe(false)
    rerender(<LbSwitch checked onChange={onChange} />)
    expect(el.classList.contains('lb-switch--checked')).toBe(true)
  })

  it('disabled 渲染禁用样式', () => {
    const { container } = render(<LbSwitch disabled />)
    expect(container.querySelector('.lb-switch--disabled')).toBeTruthy()
  })

  it('loading 渲染加载样式', () => {
    const { container } = render(<LbSwitch loading />)
    expect(container.querySelector('.lb-switch--loading')).toBeTruthy()
  })

  it('size 渲染对应尺寸样式', () => {
    const { container } = render(<LbSwitch size="small" />)
    expect(container.querySelector('.lb-switch--small')).toBeTruthy()
  })

  it('选中时应用自定义 color', () => {
    const { container } = render(<LbSwitch defaultChecked color="red" />)
    const el = container.querySelector('.lb-switch') as HTMLElement
    expect(el.style.backgroundColor).toBe('red')
  })

  it('未选中时不应用 color', () => {
    const { container } = render(<LbSwitch color="red" />)
    const el = container.querySelector('.lb-switch') as HTMLElement
    expect(el.style.backgroundColor).toBe('')
  })

  it('禁用时不应用 color', () => {
    const { container } = render(<LbSwitch defaultChecked disabled color="red" />)
    const el = container.querySelector('.lb-switch') as HTMLElement
    expect(el.style.backgroundColor).toBe('')
  })

  it('保留用户传入的 className', () => {
    const { container } = render(<LbSwitch className="my-switch" />)
    expect(container.querySelector('.my-switch')).toBeTruthy()
  })

  it('透传宿主元素属性', () => {
    const { container } = render(<LbSwitch id="my-switch" />)
    expect(container.querySelector('#my-switch')).toBeTruthy()
  })
})
