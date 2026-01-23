import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { getProduct } from '@renderer/api/product'
import { Product } from '@renderer/types'
import { Button, ConfigProvider, Input, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'

export const InventoryManagement: React.FC = () => {
  const [dataSource, setDataSource] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    ;(async () => {
      const res = await getProduct()
      setLoading(false)
      setDataSource(res.data)
    })()
  }, [])

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
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <Button icon={<PlusOutlined />} type="primary">
          新增货物
        </Button>
        <section className="flex gap-4">
          <Input placeholder="搜索产品..." prefix={<SearchOutlined />} />
          <Select
            style={{ minWidth: 140 }}
            showSearch={{
              filterOption: (input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }}
            placeholder="Select a person"
            options={[
              { value: '1', label: 'Jack' },
              { value: '2', label: 'Lucy' },
              { value: '3', label: 'Tom' }
            ]}
          />
        </section>
      </header>
      <main>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                borderColor: '#cfcfcf'
              }
            }
          }}
        >
          <Table
            className="test"
            bordered
            // pagination={false}
            loading={loading}
            dataSource={dataSource}
            columns={columns}
            rowClassName={(_, index) => (index % 2 === 0 ? 'bg-gray-100' : '')}
          ></Table>
        </ConfigProvider>
      </main>
    </div>
  )
}
