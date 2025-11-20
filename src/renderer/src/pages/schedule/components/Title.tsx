import { Button, Flex, Separator, Text, TextField } from '@radix-ui/themes'
import React from 'react'

const Title = (): React.JSX.Element => {
  return (
    // 父元素
    <Flex direction="column" className="drag" gap="6" px="4" py="6">
      {/* 上半部分 */}
      <Flex width="100%" justify="between">
        {/* 左侧部分 */}
        <Flex gap="4">
          <Text
            size="5"
            weight="bold"
            className="flex justify-center items-center select-none no-drag "
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
              style={{ cursor: 'pointer', border: '3px solid #000', boxShadow: 'none' }}
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
      <Flex width="100%" className="no-drag">
        <TextField.Root
          className="w-100"
          variant="classic"
          radius="full"
          color="gray"
          placeholder="Search order,product,customer"
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
