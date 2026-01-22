import { getProduct } from '@renderer/api/product'
import { Product } from '@renderer/types'
import { Button, ConfigProvider, Input, Radio } from 'antd'
import React, { useState } from 'react'
import './style.css'
import { DownloadOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'

const Title: React.FC<{
  setTableValue?: React.Dispatch<React.SetStateAction<Product[]>>
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setTableValue, setLoading }) => {
  const [inputValue, setInputValue] = useState<string>('')

  // 处理输入框变化
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  // 处理回车按下事件
  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
    if (event.key === 'Enter') {
      setInputValue('')
      if (!setLoading) return
      setLoading(true)

      if (setTableValue) {
        const res = await getProduct(inputValue)
        setLoading(false)
        setTableValue(res.data)
      }
    }
  }

  // 顶部按钮组切换事件
  const [buttonGroup, setButtonGroup] = useState<'cardView' | 'calendar'>('cardView')

  return (
    // 父元素
    <div className="drag z-100 flex flex-col gap-6 px-4 py-6">
      {/* 上半部分 */}
      <header className="flex w-full justify-between">
        {/* 左侧部分 */}
        <section className="center gap-4">
          <span className="flex items-center justify-center text-xl font-bold text-black select-none">
            Rent Order
          </span>

          {/* 分割线 */}
          <div className="h-8 rounded-full border border-gray-300"></div>

          <div className="flex gap-3">
            <Button
              className="no-drag"
              icon={<PlusOutlined />}
              color="default"
              variant="solid"
              size="large"
            >
              <span className="font-semibold">Add Order</span>
            </Button>

            <Button className="no-drag" icon={<DownloadOutlined />} size="large">
              <span className="font-semibold">Export</span>
            </Button>
          </div>
        </section>

        {/* 右侧部分 */}
        <section className="no-drag mx-auto items-center select-none">
          <ConfigProvider
            theme={{
              components: {
                Radio: {
                  buttonColor: '#bdbdc6',
                  buttonSolidCheckedColor: '#000000'
                }
              }
            }}
          >
            <Radio.Group
              size="large"
              value={buttonGroup}
              onChange={(e) => setButtonGroup(e.target.value)}
              id="button-group"
            >
              <Radio.Button
                value="cardView"
                className={`base ${buttonGroup === 'cardView' ? 'checked' : ''}`}
              >
                Card view
              </Radio.Button>
              <Radio.Button
                value="calendar"
                className={`base ${buttonGroup === 'calendar' ? 'checked' : ''}`}
              >
                Calendar
              </Radio.Button>
            </Radio.Group>
          </ConfigProvider>
        </section>
      </header>
      {/* 下半部分 */}
      <footer className="no-drag flex w-full justify-center gap-4">
        <Input
          styles={{
            root: { borderRadius: '100px' }
          }}
          className="no-drag"
          placeholder="请输入您想搜索的产品"
          prefix={<SearchOutlined />}
          value={inputValue}
          onChange={handleChange}
          onKeyUp={handleKeyDown}
        />
      </footer>
    </div>
  )
}

export default Title
