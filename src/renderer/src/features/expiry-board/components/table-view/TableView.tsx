import { Button, ConfigProvider, Table } from 'antd'
import { JSX } from 'react'

import { TableViewProps } from './types'

export const TableView = ({ error, isPending, data }: TableViewProps): JSX.Element => {
  const columns = [
    {
      title: '产品名称',
      dataIndex: 'product_name',
      key: 'product_name'
    },
    {
      title: '单位',
      dataIndex: 'unit',
      key: 'unit'
    },
    {
      title: '类别',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: '存储位置',
      dataIndex: 'location',
      key: 'location'
    },
    {
      title: '保质期',
      dataIndex: 'shelf_life_days',
      key: 'shelf_life_days'
    },
    {
      title: '条码信息',
      dataIndex: 'barcode',
      key: 'barcode'
    },
    {
      title: '操作',
      key: 'action',
      render: () => <Button size="small">详情</Button>
    }
  ]

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            borderColor: '#cfcfcf'
          }
        }
      }}
    >
      {error ? (
        <div>请求数据出错：{error.message}</div>
      ) : (
        <Table
          className="test"
          bordered
          loading={isPending}
          dataSource={data}
          columns={columns}
          rowKey="id"
          rowClassName={(_, index) => (index % 2 === 0 ? 'bg-gray-100' : '')}
        />
      )}
    </ConfigProvider>
  )
}
