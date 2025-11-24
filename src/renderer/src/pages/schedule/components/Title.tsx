import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  Popover,
  Separator,
  Text,
  TextArea,
  TextField
} from '@radix-ui/themes'
import React from 'react'

const DateRange = (): React.JSX.Element => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button
          radius="full"
          variant="soft"
          color="gray"
          highContrast
          style={{ cursor: 'pointer' }}
        >
          <span className="icon-[material-symbols--calendar-month] size-5" />
          <span className="font-bold">Date range:</span>
          <span className="text-gray-10">Last 30 days</span>
        </Button>
      </Popover.Trigger>

      <Popover.Content width="360px">
        <Flex gap="3">
          <Avatar
            size="2"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            fallback="A"
            radius="full"
          />
          <Box flexGrow="1">
            <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
            <Flex gap="3" mt="3" justify="between">
              <Flex align="center" gap="2" asChild>
                <Text as="label" size="2">
                  <Checkbox />
                  <Text>Send to group</Text>
                </Text>
              </Flex>

              <Popover.Close>
                <Button size="1">Comment</Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

const Channel = (): React.JSX.Element => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button
          radius="full"
          variant="soft"
          color="gray"
          highContrast
          style={{ cursor: 'pointer' }}
        >
          <span className="icon-[mdi--arrow-bottom-right-bold-box] size-5" />{' '}
          <span className="font-bold">Channel:</span>
          <span className="text-gray-10">All(10)</span>
        </Button>
      </Popover.Trigger>

      <Popover.Content width="360px">
        <Flex gap="3">
          <Avatar
            size="2"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            fallback="A"
            radius="full"
          />
          <Box flexGrow="1">
            <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
            <Flex gap="3" mt="3" justify="between">
              <Flex align="center" gap="2" asChild>
                <Text as="label" size="2">
                  <Checkbox />
                  <Text>Send to group</Text>
                </Text>
              </Flex>

              <Popover.Close>
                <Button size="1">Comment</Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

const OrderStatus = (): React.JSX.Element => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button
          radius="full"
          variant="soft"
          color="gray"
          highContrast
          style={{ cursor: 'pointer' }}
        >
          <span className="icon-[tabler--atom-2-filled] size-5" />{' '}
          <span className="font-bold">Order status:</span>
          <span className="text-gray-10">All(10)</span>
        </Button>
      </Popover.Trigger>

      <Popover.Content width="360px">
        <Flex gap="3">
          <Avatar
            size="2"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            fallback="A"
            radius="full"
          />
          <Box flexGrow="1">
            <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
            <Flex gap="3" mt="3" justify="between">
              <Flex align="center" gap="2" asChild>
                <Text as="label" size="2">
                  <Checkbox />
                  <Text>Send to group</Text>
                </Text>
              </Flex>

              <Popover.Close>
                <Button size="1">Comment</Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

const Title = (): React.JSX.Element => {
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
      <Flex width="100%" gap="2" justify="center" className="no-drag">
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
        {/* 后面的弹出框部分 */}
        <DateRange />
        <Channel />
        <OrderStatus />
      </Flex>
    </Flex>
  )
}

export default Title
