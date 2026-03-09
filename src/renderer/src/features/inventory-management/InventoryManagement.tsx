import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import { Button, ConfigProvider, Form, Input, Select, Table } from 'antd'
import { JSX, useCallback, useEffect, useState } from 'react'

import { getProduct, Product } from './api'
import { AddGoodsModal } from './components'

export const InventoryManagement = (): JSX.Element => {
  // 搜索字段
  const [searchValue, setSearchValue] = useState('')

  // 产品数据
  const [productData, setProductData] = useState<Product[]>([])

  // 获取产品请求
  const { data, isPending, error } = useQuery({
    queryKey: ['productData', searchValue],
    queryFn: async () => {
      const res = await getProduct(searchValue)
      setProductData(res.data)
      return res.data
    }
  })

  // 下拉框
  const [selectData, setSelectData] = useState<
    {
      value: number
      label: string
    }[]
  >([])

  // 监听data变化，变化时更新下拉框的值
  useEffect(() => {
    if (!data || data.length === 0) return
    // Array.from将Set变为真正数组
    // 用map提取类型并用new Set令原数组去重
    // filter(Boolean)则是过滤假值，如null undefined等
    const res = Array.from(new Set(data.map((item) => item.category).filter(Boolean))).map(
      (item, index) => {
        return { value: index, label: item }
      }
    )
    setSelectData(res)
  }, [data])

  // 下拉框选择函数
  const handleSelect = useCallback(
    (_, { label }): void => {
      console.log(1)
      const res = data?.filter((item) => item.category === label)
      if (res) {
        setProductData(res)
      }
    },
    [data]
  )

  // 模态框
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [form] = Form.useForm()

  // 搜索事件
  const handleSearch = (formData: { search: string }): void => {
    form.resetFields()
    setSearchValue(formData.search)
  }

  // 表格基本列
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
    <>
      <div className="flex flex-col gap-4 rounded-xl bg-white p-4">
        <header className="flex items-center justify-between">
          <section className="flex gap-4">
            <Form onFinish={handleSearch} form={form}>
              <Form.Item<{ search: string | number }> name="search" style={{ margin: 0 }}>
                <Input placeholder="搜索产品..." prefix={<SearchOutlined />} />
              </Form.Item>
            </Form>

            <Select
              style={{ minWidth: 140 }}
              showSearch={{
                filterOption: (input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }}
              placeholder="类别筛选"
              allowClear
              onClear={() => {
                if (data) {
                  setProductData(data)
                }
              }}
              onSelect={handleSelect}
              options={selectData}
            />
          </section>

          <Button
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => {
              setIsModalOpen(true)
            }}
          >
            新增货物
          </Button>
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
            {error ? (
              <div>请求数据出错：{error.message}</div>
            ) : (
              <Table
                className="test"
                bordered
                loading={isPending}
                dataSource={productData}
                columns={columns}
                rowClassName={(_, index) => (index % 2 === 0 ? 'bg-[#f5f5f5]' : '')}
              />
            )}
          </ConfigProvider>
        </main>
      </div>

      <AddGoodsModal
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false)
        }}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  )
}
