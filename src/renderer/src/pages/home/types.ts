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
