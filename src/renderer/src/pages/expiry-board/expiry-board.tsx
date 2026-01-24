import { AppstoreOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { getProduct } from '@renderer/api/product'
import { useQuery } from '@tanstack/react-query'
import { Button, ConfigProvider, Form, Input, Radio, RadioChangeEvent, Select, Table } from 'antd'
import { JSX, useState } from 'react'

export const ExpiryBoard = (): JSX.Element => {
  const onChange = (e: RadioChangeEvent): void => {
    console.log(`radio checked:${e.target.value}`)
  }

  // 搜索字段
  const [searchValue, setSearchValue] = useState('')

  // 获取产品请求
  const { data, isPending, error } = useQuery({
    queryKey: ['productData', searchValue],
    queryFn: async () => {
      const res = await getProduct(searchValue)
      return res
    }
  })

  // ui层
  // 获取表单实例以使用表单方法
  const [form] = Form.useForm()

  // 搜索事件
  const handleSearch = (formData: { search: string }): void => {
    form.resetFields()
    setSearchValue(formData.search)
  }

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
      {/* 头部部分 */}
      <header className="flex items-center justify-between">
        <section>
          <Radio.Group onChange={onChange} defaultValue="card" buttonStyle="solid">
            <Radio.Button value="card">
              <AppstoreOutlined />
              卡片视图
            </Radio.Button>
            <Radio.Button value="table">
              <AppstoreOutlined />
              表格视图
            </Radio.Button>
          </Radio.Group>
        </section>
        <section className="flex gap-4">
          <Form onFinish={handleSearch} form={form}>
            <Form.Item<{ search: string | number }> name="search" style={{ margin: 0 }}>
              <Input placeholder="搜索产品..." prefix={<SearchOutlined />} />
            </Form.Item>
          </Form>{' '}
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
        </section>{' '}
        <Button icon={<PlusOutlined />} type="primary">
          新增批次
        </Button>
      </header>
      {/* 主体部分 */}
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
          {error ? (
            <div>请求数据出错：{error.message}</div>
          ) : (
            <Table
              className="test"
              bordered
              loading={isPending}
              dataSource={data?.data}
              columns={columns}
              rowClassName={(_, index) => (index % 2 === 0 ? 'bg-gray-100' : '')}
            />
          )}
        </ConfigProvider>
      </main>
    </div>
  )
}
