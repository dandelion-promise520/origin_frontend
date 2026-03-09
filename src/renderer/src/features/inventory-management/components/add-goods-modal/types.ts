import { ModalProps } from 'antd'

export interface AddGoodsModalProps extends ModalProps {
  setIsModalOpen: (open: boolean) => void
}

export interface FieldType {
  product_name?: string
  barcode?: string
  shelf_life_days?: string
  manufacturer?: string
  location?: string
  unit?: string
}
