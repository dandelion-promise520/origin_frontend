import { AppstoreOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import { Button, Form, Input, Radio, Select } from 'antd'
import { JSX, useCallback, useEffect, useState } from 'react'

import { getProduct, Product } from './api'
import { AddBatchesModal, CardView, HeaderCard, TableView } from './components'

export const ExpiryBoard = (): JSX.Element => {
  // 搜索框
  const [searchValue, setSearchValue] = useState('')

  // 视图
  const [view, setView] = useState<'table' | 'card'>('table')
  // 搜索框实例
  const [form] = Form.useForm()

  // 搜索函数
  const handleSearch = (formData: { search: string }): void => {
    form.resetFields()
    setSearchValue(formData.search)
  }

  // 产品数据
  const [productData, setProductData] = useState<Product[]>([])

  // 请求数据
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

  return (
    <>
      <div className="flex flex-col gap-4">
        <HeaderCard />

        <section className="flex flex-col gap-4 rounded-xl bg-white p-4">
          <header className="flex items-center justify-between">
            <section>
              <Radio.Group
                onChange={(e) => {
                  setView(e.target.value)
                }}
                value={view}
                buttonStyle="solid"
              >
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
                <Form.Item<{ search: string }> name="search" style={{ margin: 0 }}>
                  <Input placeholder="搜索产品..." prefix={<SearchOutlined />} />
                </Form.Item>
              </Form>

              <Select
                style={{ minWidth: 200 }}
                showSearch
                placeholder="全部状态"
                options={selectData}
                allowClear
                onSelect={handleSelect}
                onClear={() => {
                  if (data) {
                    setProductData(data)
                  }
                }}
              />
            </section>

            <Button
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => {
                setIsModalOpen(true)
              }}
            >
              新增批次
            </Button>
          </header>

          <main>
            {view === 'table' ? (
              <TableView data={productData} error={error} isPending={isPending} />
            ) : (
              <CardView />
            )}
          </main>
        </section>
      </div>

      {/* 新增批次模态框 */}
      <AddBatchesModal
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false)
        }}
      />
    </>
  )
}
