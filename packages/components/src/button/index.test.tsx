import { fireEvent, render, screen } from '@testing-library/react'
import { LbButton } from './index'

describe('Button', () => {
  it('renders children', () => {
    render(<LbButton>提交</LbButton>)
    expect(screen.getByText('提交')).toBeInTheDocument()
  })

  it('calls onClick once', () => {
    const onClick = jest.fn()
    render(<LbButton onClick={onClick}>提交</LbButton>)
    fireEvent.click(screen.getByText('提交'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick while loading', () => {
    const onClick = jest.fn()
    render(<LbButton loading onClick={onClick}>提交</LbButton>)
    fireEvent.click(screen.getByText('提交'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('keeps user className', () => {
    const { container } = render(<LbButton className='my-btn'>提交</LbButton>)
    expect(container.querySelector('.my-btn')).toBeTruthy()
  })

  it('passes host props through', () => {
    const { container } = render(<LbButton id='submit-btn'>提交</LbButton>)
    expect(container.querySelector('#submit-btn')).toBeTruthy()
  })
})