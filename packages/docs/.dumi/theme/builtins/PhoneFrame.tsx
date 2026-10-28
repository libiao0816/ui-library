import React from 'react'
import './PhoneFrame.scss'

type Props = {
  /** example 工程的页面路径，对应 app.config.ts 的 pages 项 */
  page: string
  title?: string
}

export default function PhoneFrame({ page, title }: Props) {
  // H5 产物与文档站同域部署（见步骤 4），hash 路由直接拼
  const src = `/h5/index.html#/${page}`
  return (
    <div className='lb-phone'>
      <iframe title={title ?? page} src={src} />
      {title && <p className='lb-phone__caption'>{title}</p>}
    </div>
  )
}
