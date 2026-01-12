import { Button, Flex, Separator, Text, TextField } from '@radix-ui/themes'
import { getProduct, Product } from '@renderer/api/product'
import React, { useState } from 'react'

const Title: React.FC<{
  setTableValue?: React.Dispatch<React.SetStateAction<Product[]>>
}> = ({ setTableValue }) => {
  const [inputValue, setInputValue] = useState<string>('')

  // 处理输入框变化
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  // 处理回车按下事件
  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
    if (event.key === 'Enter') {
      if (inputValue !== '') {
        setInputValue('')
        const res = await getProduct(inputValue)
        console.log(res)
        if (setTableValue) {
          setTableValue(res)
        }
      }
    }
  }

  return (
    // 父元素
    <Flex direction="column" className="drag z-100" gap="6" px="4" py="6">
      {/* 上半部分 */}
      <Flex width="100%" justify="between">
        {/* 左侧部分 */}
        <Flex gap="4">
          <Text
            size="5"
            weight="bold"
            className="no-drag flex items-center justify-center select-none"
          >
            Rent Order
          </Text>

          <Separator mx="2" size="4" orientation="vertical" />

          <Flex gap="2">
            <Button
              className="no-drag"
              style={{ cursor: 'pointer' }}
              color="gray"
              radius="large"
              size="3"
              variant="classic"
              highContrast
            >
              <span className="icon-[mdi--plus] size-6" />
              Add Order
            </Button>

            <Button
              className="no-drag"
              style={{ cursor: 'pointer' }}
              color="gray"
              radius="large"
              size="3"
              variant="surface"
              highContrast
            >
              <span className="icon-[material-symbols--download] size-6" /> Export
            </Button>
          </Flex>
        </Flex>

        {/* 右侧部分 */}
        <Flex align="center" className="mx-auto">
          <Flex>
            <Button
              className="no-drag"
              style={{
                cursor: 'pointer',
                border: '3px solid #000',
                boxShadow: 'none'
              }}
              color="gray"
              radius="large"
              size="3"
              variant="outline"
              highContrast
            >
              Cord View
            </Button>

            <Button
              className="no-drag"
              style={{ cursor: 'pointer' }}
              color="gray"
              radius="large"
              size="3"
              variant="surface"
              highContrast
            >
              <span className="text-gray-8">Calendar</span>
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* 下半部分 */}
      <Flex width="100%" gap="2" justify="center" className="no-drag">
        <TextField.Root
          className="flex-1"
          variant="classic"
          radius="full"
          color="gray"
          placeholder="Search order,product,customer"
          value={inputValue}
          onChange={handleChange}
          onKeyUp={handleKeyDown}
        >
          <TextField.Slot>
            <span className="icon-[mingcute--search-line]" />
          </TextField.Slot>
        </TextField.Root>
      </Flex>
    </Flex>
  )
}

export default Title
