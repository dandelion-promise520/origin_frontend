export interface dataInter {
  id: number
  status: 'Draft' | 'Active' | 'Over Time'
  machine: string
  startTime: string
  endTime: string
  avatar: string
  name: string
  device: 'Website' | 'In-store'
}
export const color = [
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
export type Color = (typeof color)[number]
