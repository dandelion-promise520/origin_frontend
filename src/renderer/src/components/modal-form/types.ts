import { FormProps, ModalProps } from 'antd'
import { ReactNode } from 'react'

export interface ModalFormProps {
  modalProps: ModalProps
  formProps: FormProps
  children: ReactNode
  modalTitle: string
}
