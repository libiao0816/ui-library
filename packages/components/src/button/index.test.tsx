import { fireEvent, render, screen } from '@testing-library/react'
import { LbButton } from './index'

describe('Button', () => {
  it('渲染子元素', () => {
    render(<LbButton>提交</LbButton>)
    expect(screen.getByText('提交')).toBeInTheDocument()
  })

  it('点击时触发一次 onClick', () => {
    const onClick = jest.fn()
    render(<LbButton onClick={onClick}>提交</LbButton>)
    fireEvent.click(screen.getByText('提交'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('loading 状态下不触发 onClick', () => {
    const onClick = jest.fn()
    render(
      <LbButton loading onClick={onClick}>
        提交
      </LbButton>,
    )
    fireEvent.click(screen.getByText('提交'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('保留用户传入的 className', () => {
    const { container } = render(<LbButton className="my-btn">提交</LbButton>)
    expect(container.querySelector('.my-btn')).toBeTruthy()
  })

  it('透传宿主元素属性', () => {
    const { container } = render(<LbButton id="submit-btn">提交</LbButton>)
    expect(container.querySelector('#submit-btn')).toBeTruthy()
  })
})
