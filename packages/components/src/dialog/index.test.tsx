import { fireEvent, render, screen } from '@testing-library/react'
import { LbDialog } from './index'

describe('Dialog', () => {
  it('visible 为 false 时不渲染', () => {
    render(<LbDialog title="提示">内容</LbDialog>)
    expect(screen.queryByText('提示')).toBeNull()
    expect(screen.queryByText('内容')).toBeNull()
  })

  it('visible 为 true 时渲染标题与内容', () => {
    render(
      <LbDialog visible title="提示">
        内容
      </LbDialog>,
    )
    expect(screen.getByText('提示')).toBeInTheDocument()
    expect(screen.getByText('内容')).toBeInTheDocument()
  })

  it('点击确认按钮触发 onConfirm 与 onClose', () => {
    const onConfirm = jest.fn()
    const onClose = jest.fn()
    render(
      <LbDialog visible onConfirm={onConfirm} onClose={onClose}>
        内容
      </LbDialog>,
    )
    fireEvent.click(screen.getByText('确认'))
    expect(onConfirm).toHaveBeenCalledTimes(1)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('点击取消按钮触发 onCancel 与 onClose', () => {
    const onCancel = jest.fn()
    const onClose = jest.fn()
    render(
      <LbDialog visible onCancel={onCancel} onClose={onClose}>
        内容
      </LbDialog>,
    )
    fireEvent.click(screen.getByText('取消'))
    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('showCancel 为 false 时不渲染取消按钮', () => {
    render(
      <LbDialog visible showCancel={false}>
        内容
      </LbDialog>,
    )
    expect(screen.queryByText('取消')).toBeNull()
    expect(screen.getByText('确认')).toBeInTheDocument()
  })

  it('点击遮罩触发 onClose，closeOnClickMask 为 false 时不触发', () => {
    const onClose = jest.fn()
    const { container, rerender } = render(
      <LbDialog visible onClose={onClose}>
        内容
      </LbDialog>,
    )
    fireEvent.click(container.querySelector('.lb-dialog__mask')!)
    expect(onClose).toHaveBeenCalledTimes(1)

    rerender(
      <LbDialog visible closeOnClickMask={false} onClose={onClose}>
        内容
      </LbDialog>,
    )
    fireEvent.click(container.querySelector('.lb-dialog__mask')!)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('支持自定义按钮文案与 className', () => {
    const { container } = render(
      <LbDialog visible className="my-dialog" cancelText="再想想" confirmText="好的">
        内容
      </LbDialog>,
    )
    expect(screen.getByText('再想想')).toBeInTheDocument()
    expect(screen.getByText('好的')).toBeInTheDocument()
    expect(container.querySelector('.my-dialog')).toBeTruthy()
  })
})
