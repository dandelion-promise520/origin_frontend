import { Avatar, Flex, Progress, Separator } from '@radix-ui/themes'
import React from 'react'
import Title from './components/Title'

const Schedule = (): React.JSX.Element => {
  interface dataInter {
    id: string
    status: 'Draft' | 'Active' | 'Over Time'
    machine: string
    startTime: string
    endTime: string
    avatar: string
    name: string
    device: 'Website' | 'In-store'
  }

  const data: dataInter[] = [
    {
      id: '#92',
      status: 'Draft',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x)',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Website'
    },
    {
      id: '#100',
      status: 'Over Time',
      machine: 'Canon 600D (1x)',
      startTime: '27 Oct, 9:00am',
      endTime: '31 Oct, 9:00am',
      avatar: 'https://***',
      name: 'Darlene Fox',
      device: 'Website'
    },
    {
      id: '#95',
      status: 'Active',
      machine: 'DJl Mavic 3 (1x); Go Pro Hero 5(1x); Battery pack (1x)',
      startTime: '26 Oct, 9:00am',
      endTime: '2 Nov,12:00pm',
      avatar: 'https://***',
      name: 'Floyd Miles',
      device: 'In-store'
    },
    {
      id: '#94',
      status: 'Active',
      machine: 'Fujifilm 35mm Lens (2x)',
      startTime: '30 Oct, 9:00am',
      endTime: '4 Nov,9:00pm',
      avatar: 'https://***',
      name: 'Munawir Efendi',
      device: 'In-store'
    },
    {
      id: '#98',
      status: 'Active',
      machine: 'Go Pro Hero 5 (1x)',
      startTime: '29 Oct, 7:00am',
      endTime: '5 Nov,7:00pm',
      avatar: 'https://***',
      name: 'Courtney Henry',
      device: 'Website'
    },
    {
      id: '#97',
      status: 'Active',
      machine: 'Go Pro Hero 5 (1x);0mm Fuji Lens(1x)',
      startTime: '1 Nov,9:00pm',
      endTime: '7 Nov,9:00am',
      avatar: 'https://***',
      name: 'Mario San',
      device: 'Website'
    }
  ]

  const color = [
    'ruby',
    'gray',
    'gold',
    'bronze',
    'brown',
    'yellow',
    'amber',
    'orange',
    'tomato',
    'red',
    'crimson',
    'pink',
    'plum',
    'purple',
    'violet',
    'iris',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'jade',
    'green',
    'grass',
    'lime',
    'mint',
    'sky',
    undefined
  ] as const
  type Color = (typeof color)[number]

  function getRandomColor(): Color {
    return color[Math.floor(Math.random() * color.length)]
  }

  function Main(): React.JSX.Element {
    return (
      <Flex
        p="4"
        justify="center"
        align="start"
        style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}
      >
        <div className="grid gap-6 grid-cols-3 w-full">
          {data.map((item) => (
            <div
              key={item.id}
              className={`relative flex flex-col  border-2 border-gray-4 rounded-md rounded-b-2xl p-4 pb-6 gap-4 ${item.status === 'Draft' ? 'bg-gray-3' : item.status === 'Active' ? '' : 'bg-red-50 border-red-200'} `}
            >
              {/* id部分 */}
              <div className="flex gap-1 items-center">
                <span className="text-gray-10 font-bold text-xl">{item.id}</span>
                <Separator mx="2" size="1" orientation="vertical" />
                <span
                  className={`text-2xl ${item.status === 'Draft' ? 'icon-[material-symbols--draft] text-gray-10' : item.status === 'Active' ? 'icon-[basil--lightning-alt-solid] text-blue-400' : 'icon-[majesticons--exclamation] text-red-400'}`}
                />
                <span className="text-gray-10 font-medium text-md">{item.status}</span>
              </div>
              {/* 名称部分 */}
              <span className={`${item.status === 'Draft' ? 'text-gray-10' : ''}`}>
                {item.machine};
              </span>

              {/* 时间部分 */}
              <div className="flex flex-col gap-3 mt-auto">
                {/* 文字部分 */}
                <div className="flex justify-between text-gray-10 text-sm">
                  <span>{item.startTime}</span>
                  <span>{item.endTime}</span>
                </div>
                {/* 进度条 */}
                <Progress value={25} size="1" />
              </div>

              {/* 个人信息部分 */}
              <div className="flex justify-between items-center mt-10">
                {/* 信息部分 */}
                <div className="flex justify-center items-center gap-4">
                  <Avatar
                    radius="full"
                    size="2"
                    color={getRandomColor()}
                    fallback={item.name
                      .split(' ')
                      .map((word) => word[0].toUpperCase())
                      .join('')}
                  />
                  <div className="flex flex-col">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex gap-1 text-sm">
                      <span className="text-gray-10">Via</span>
                      <span>{item.device}</span>
                    </div>
                  </div>
                </div>
                {/* 按钮部分 */}
                <div>
                  <div className="bg-black size-8 flex justify-center items-center rounded-full cursor-pointer">
                    <span className="icon-[material-symbols--arrow-forward-ios] text-white" />
                  </div>
                </div>
              </div>
              {/* 底部条 */}
              <div
                className={`${item.status === 'Draft' ? 'bg-[#a5a6b1]' : item.status === 'Active' ? 'bg-[#14bcf1]' : 'bg-[#fa4561]'}  absolute left-0 bottom-0 h-2 rounded-b-2xl w-full`}
              ></div>
            </div>
          ))}
        </div>
      </Flex>
    )
  }

  return (
    <Flex direction="column" height="100%" width="100%">
      <Title />
      <Main />
    </Flex>
  )
}

export default Schedule
