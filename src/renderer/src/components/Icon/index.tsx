import Icon from '@ant-design/icons'
import { GetProps } from 'antd'
import React from 'react'

type CustomIconComponentProps = GetProps<typeof Icon>

// 草稿图标
const draftSvg: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"
      />
    </svg>
  )
}
export const DraftIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
  <Icon component={draftSvg} {...props} className="size-6" style={{ color: '#6a7282' }} />
)

// 蓝色闪电图标
const lightningSvg: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M13.82 3a.5.5 0 0 0-.847-.36l-1.778 1.71a35.6 35.6 0 0 0-6.63 8.715a.5.5 0 0 0 .435.746h4.31V21a.5.5 0 0 0 .837.37l.795-.725a35.5 35.5 0 0 0 7.001-8.78l.492-.87a.5.5 0 0 0-.435-.747h-4.18z"
      />
    </svg>
  )
}
export const LightningIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
  <Icon
    component={lightningSvg}
    {...props}
    className="size-6"
    style={{ color: 'oklch(70.7% 0.165 254.624)' }}
  />
)

// 红色警告图标
const exclamationSvg: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.378 4.661c1.143-2.057 4.101-2.057 5.245 0l6.6 11.882c1.111 2-.335 4.457-2.622 4.457H5.399c-2.287 0-3.733-2.457-2.622-4.457l6.6-11.882zM12 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm1 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
export const ExclamationIcon: React.FC<Partial<CustomIconComponentProps>> = (props) => (
  <Icon
    component={exclamationSvg}
    {...props}
    className="size-6"
    style={{ color: 'oklch(70.4% 0.191 22.216)' }}
  />
)
