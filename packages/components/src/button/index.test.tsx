import { fireEvent, render, screen } from '@testing-library/react'
import Button from './index'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>提交</Button>)
    expect(screen.getByText('提交')).toBeInTheDocument()
  })

  it('calls onClick once', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>提交</Button>)
    fireEvent.click(screen.getByText('提交'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick while loading', () => {
    const onClick = jest.fn()
    render(<Button loading onClick={onClick}>提交</Button>)
    fireEvent.click(screen.getByText('提交'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('keeps user className', () => {
    const { container } = render(<Button className='my-btn'>提交</Button>)
    expect(container.querySelector('.my-btn')).toBeTruthy()
  })

  it('passes host props through', () => {
    const { container } = render(<Button id='submit-btn'>提交</Button>)
    expect(container.querySelector('#submit-btn')).toBeTruthy()
  })
})