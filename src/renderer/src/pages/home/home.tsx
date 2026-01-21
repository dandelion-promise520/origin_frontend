import React from 'react'
import Title from '../../components/Title'
import { dataInter } from './types'
import { Avatar, Progress, ProgressProps } from 'antd'

const Home: React.FC = () => {
  // 卡片数据信息
  const data: dataInter[] = [
    {
      id: 92,
      status: 'Draft',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x)',
      startTime: '2024-11-03T06:00:00.000Z',
      endTime: '2026-11-09T06:00:00.000Z',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Website'
    },
    {
      id: 10,
      status: 'Over Time',
      machine: 'Canon 600D (1x)',
      startTime: '2024-10-27T01:00:00.000Z',
      endTime: '2025-10-31T01:00:00.000Z',
      avatar: 'https://***',
      name: 'Darlene Fox',
      device: 'Website'
    },
    {
      id: 95,
      status: 'Active',
      machine: 'DJl Mavic 3 (1x); Go Pro Hero 5(1x); Battery pack (1x)',
      startTime: '2024-10-26T01:00:00.000Z',
      endTime: '2026-11-02T04:00:00.000Z',
      avatar: 'https://***',
      name: 'Floyd Miles',
      device: 'In-store'
    },
    {
      id: 94,
      status: 'Active',
      machine: 'Fujifilm 35mm Lens (2x)',
      startTime: '2024-10-30T01:00:00.000Z',
      endTime: '2026-11-04T13:00:00.000Z',
      avatar: 'https://***',
      name: 'Munawir Efendi',
      device: 'In-store'
    },
    {
      id: 98,
      status: 'Active',
      machine: 'Go Pro Hero 5 (1x)',
      startTime: '2024-10-28T23:00:00.000Z',
      endTime: '2026-11-05T11:00:00.000Z',
      avatar: 'https://***',
      name: 'Courtney Henry',
      device: 'Website'
    },
    {
      id: 97,
      status: 'Active',
      machine: 'Go Pro Hero 5 (1x);0mm Fuji Lens(1x)',
      startTime: '2024-11-01T13:00:00.000Z',
      endTime: '2026-11-07T01:00:00.000Z',
      avatar: 'https://***',
      name: 'Mario San',
      device: 'Website'
    }
  ]

  // 随机头像颜色
  const colors = ['#f56a00', '#7265e6', '#ffbf36', '#00a870', '#eb2f96', '#1890ff']
  const getRandomColor = (name: string): string => {
    // 获取 name 的第一个字符的 Unicode 编码值
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  // 转换时间
  function getTime(isoString: string): string {
    const date = new Date(isoString)

    if (isNaN(date.getTime())) {
      throw new Error('缺少ISO时间字段')
    }

    // 获取日期部分
    const day = date.getDate()
    const month = date.toLocaleString('en', { month: 'short' })

    // 获取时间部分（12小时制）
    let hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const period = hours >= 12 ? 'pm' : 'am'

    // 转成12小时值
    hours = hours % 12 || 12

    return `${day} ${month}, ${hours}:${minutes}${period}`
  }
  // 算出当前所剩时间余额(结束时间减去开始时间)返回一个0-100的值作为进度条
  function getRemaining(startTime: string, endTime: string): number {
    const start = new Date(startTime).getTime()
    const end = new Date(endTime).getTime()
    const now = Date.now()

    // 验证时间有效性
    if (isNaN(start) || isNaN(end)) {
      throw new Error('输入时间无效')
    }

    if (start >= end) {
      throw new Error('开始时间必须早于结束时间')
    }
    // 如果当前时间早于开始时间，返回0%
    if (now < start) {
      return 0
    }

    // 如果当前时间晚于结束时间，返回100%
    if (now > end) {
      return 100
    }

    // 计算进度百分比
    const totalDuration = end - start
    const elapsed = now - start
    const progress = (elapsed / totalDuration) * 100

    // 返回0-100之间的值，保留两位小数
    return Math.min(100, Math.max(0, Number(progress.toFixed(2))))
  }

  // 进度条
  const classNames: ProgressProps['classNames'] = {
    root: 'demo-progress-root',
    rail: 'demo-progress-rail',
    track: 'demo-progress-track'
  }

  const stylesFn: ProgressProps['styles'] = (info) => {
    const percent = info?.props?.percent ?? 0
    const hue = 200 - (200 * percent) / 100
    return {
      track: {
        backgroundImage: `
        linear-gradient(
          to right,
          hsla(${hue}, 85%, 65%, 1),
          hsla(${hue + 30}, 90%, 55%, 0.95)
        )`,
        borderRadius: 8,
        transition: 'all 0.3s ease'
      },
      rail: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 8
      }
    } satisfies ProgressProps['styles']
  }

  //内容部分
  const Main: React.FC = () => {
    return (
      <div className="flex min-h-0 flex-1 items-start justify-center overflow-y-auto p-4">
        <main className="grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className={`relative flex flex-col gap-4 rounded-md rounded-b-2xl border-2 border-gray-200 p-4 pb-6 ${item.status === 'Draft' ? 'bg-[#f4f4f4]' : item.status === 'Active' ? '' : 'border-red-200 bg-[#fff8f9]'} `}
            >
              {/* id部分 */}
              <section className="flex items-center gap-2">
                {/* id */}
                <span className="text-xl font-bold text-gray-500">#{item.id}</span>
                {/* 分割线 */}
                <span className="h-4 rounded-full border border-gray-300"></span>
                {/* 图标 */}
                <span
                  className={`text-2xl ${item.status === 'Draft' ? 'icon-[material-symbols--draft] text-gray-500' : item.status === 'Active' ? 'icon-[basil--lightning-alt-solid] text-blue-400' : 'icon-[majesticons--exclamation] text-red-400'}`}
                />
                {/* 状态 */}
                <span className="text-md font-medium text-gray-500">{item.status}</span>
              </section>
              {/* 名称部分 */}
              <section className={`${item.status === 'Draft' ? 'text-gray-500' : ''}`}>
                {item.machine};
              </section>

              {/* 时间部分 */}
              <section className="mt-auto flex flex-col gap-3">
                {/* 文字部分 */}
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{getTime(item.startTime)}</span>

                  <span>{getTime(item.endTime)}</span>
                </div>
                {/* 进度条 */}
                <Progress
                  classNames={classNames}
                  styles={stylesFn}
                  percent={getRemaining(item.startTime, item.endTime)}
                  format={() => ''}
                />
              </section>

              {/* 个人信息部分 */}
              <section className="flex items-center justify-between">
                {/* 信息部分 */}
                <div className="flex items-center justify-center gap-4">
                  <Avatar style={{ backgroundColor: getRandomColor(item.name) }}>
                    {item.name
                      .split(' ')
                      .map((word) => word[0].toUpperCase())
                      .join('')}
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex gap-1 text-sm">
                      <span className="text-gray-500">Via</span>
                      <span>{item.device}</span>
                    </div>
                  </div>
                </div>
                {/* 按钮部分 */}
                <div>
                  <div className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-black">
                    <span className="icon-[material-symbols--arrow-forward-ios] text-white" />
                  </div>
                </div>
              </section>
              {/* 底部条 */}
              <div
                className={`${item.status === 'Draft' ? 'bg-[#a5a6b1]' : item.status === 'Active' ? 'bg-[#14bcf1]' : 'bg-[#fa4561]'} absolute bottom-0 left-0 h-2 w-full rounded-b-2xl`}
              ></div>
            </div>
          ))}
        </main>
      </div>
    )
  }

  return (
    <div className="flex size-full flex-col">
      <Title />
      <Main />
    </div>
  )
}

export default Home
