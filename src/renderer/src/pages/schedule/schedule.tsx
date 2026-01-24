import { getProduct, Product } from '@renderer/api/product'
import { ConfigProvider, Table } from 'antd'
import { JSX, useEffect, useState } from 'react'

export const Schedule = (): JSX.Element => {
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
      title: '名称',
      dataIndex: 'product_name',
      key: 'product_name'
    },
    {
      title: '	单位',
      dataIndex: 'unit',
      key: 'unit'
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
    }
  ]

  return (
    <div className="flex h-full w-full flex-col">
      {/* 内容部分 */}
      <div className="p-4">
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
            bordered
            pagination={false}
            loading={loading}
            dataSource={dataSource}
            columns={columns}
            rowClassName={(_, index) => (index % 2 === 0 ? 'bg-gray-100' : '')}
          ></Table>
        </ConfigProvider>
      </div>
    </div>
  )
}
