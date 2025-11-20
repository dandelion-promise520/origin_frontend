import { Flex } from '@radix-ui/themes'
import React from 'react'
import Title from './components/Title'

const schedule = (): React.JSX.Element => {
  const data = [
    {
      id: '#92',
      status: 'Draft',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x);',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Via Website'
    },
    {
      id: '#92',
      status: 'Draft',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x);',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Via Website'
    },
    {
      id: '#92',
      status: 'Draft',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x);',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Via Website'
    },
    {
      id: '#92',
      status: 'Draft',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x);',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Via Website'
    },
    {
      id: '#92',
      status: 'Draft',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x);',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Via Website'
    },
    {
      id: '#92',
      status: 'Draft',
      machine: 'Fujifilm XT20(2x); Tripod Xtramax(3x); 50mm Leica Lens (1x);',
      startTime: '3 Nov,2:00pm',
      endTime: '9 Nov,2:00pm',
      avatar: 'https://***',
      name: 'Darrell Steward',
      device: 'Via Website'
    }
  ]

  return (
    <Flex direction="column" justify="between" height="100%" width="100%">
      <Title />
      <Flex p="4" justify="center" align="center">
        <div className="grid grid-cols-3">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col">
              <span>{item.status}</span>
              <span>{item.machine}</span>
              <span>{item.startTime}</span>
              <span>{item.endTime}</span>
              <span>{item.avatar}</span>
              <span>{item.name}</span>
              <span>{item.device}</span>
            </div>
          ))}
        </div>
      </Flex>
    </Flex>
  )
}

export default schedule
