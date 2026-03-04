import { AppstoreOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import { Button, Form, Input, Radio, Select } from 'antd'
import { JSX, useState } from 'react'

import { getProduct } from './api'
import { CardView } from './components/CardView'
import { HeaderCard } from './components/HeaderCard'
import { TableView } from './components/TableView'

export const ExpiryBoard = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('')
  const [view, setView] = useState<'table' | 'card'>('table')
  const [form] = Form.useForm()

  const handleSearch = (formData: { search: string }): void => {
    form.resetFields()
    setSearchValue(formData.search)
  }

  const { data, isPending, error } = useQuery({
    queryKey: ['productData', searchValue],
    queryFn: async () => {
      const res = await getProduct(searchValue)
      return res.data
    }
  })

  return (
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
              options={data?.map((item) => {
                return { value: item.id, label: item.product_name }
              })}
            />
          </section>

          <Button icon={<PlusOutlined />} type="primary">
            新增批次
          </Button>
        </header>

        <main>
          {view === 'table' ? (
            <TableView data={data} error={error} isPending={isPending} />
          ) : (
            <CardView />
          )}
        </main>
      </section>
    </div>
  )
}
