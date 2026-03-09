import { ModalProps } from 'antd'

export interface batchesDetailsModalProps extends ModalProps {
  setIsModalOpen: (open: boolean) => void
}

export interface FieldType {
  batch_name?: string
  batch_code?: string
  category?: string
  expire_date?: string
  status?: string
  location?: string
  manufacturer?: string
  quantity?: number
}
