import { CalendarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { JSX } from 'react'

export const HeaderCard = (): JSX.Element => {
  const cardData = [
    { name: '总库存', quantity: 850, iconColor: 'blue', iconBgColor: '#dbeafe' },
    { name: '即将过期', quantity: 2, iconColor: '#d29d25', iconBgColor: '#fef9c3' },
    { name: '已过期', quantity: 1, iconColor: 'red', iconBgColor: '#fee2e2' },
    { name: '正常库存', quantity: 5, iconColor: 'green', iconBgColor: '#dcfce7' }
  ]

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(212px,1fr))] gap-4">
      {cardData.map((item) => (
        <Card key={item.name} className="no-drag shadow">
          <div className="flex items-center gap-4">
            <CalendarOutlined
              style={{
                color: item.iconColor,
                fontSize: 16,
                backgroundColor: item.iconBgColor,
                height: '40px',
                width: '40px'
              }}
              className="center rounded-full"
            />
            <section className="flex flex-col">
              <span className="text-gray-500">{item.name}</span>
              <span className="text-xl font-bold">{item.quantity}</span>
            </section>
          </div>
        </Card>
      ))}
    </section>
  )
}
