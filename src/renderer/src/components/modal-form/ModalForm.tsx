import { ConfigProvider, Form, Modal } from 'antd'
import { JSX } from 'react'

import { ModalFormProps } from './types'

export const ModalForm = ({
  formProps,
  modalProps,
  children,
  modalTitle
}: ModalFormProps): JSX.Element => {
  return (
    <Modal
      className="no-drag"
      centered
      footer={null}
      maskClosable={false}
      title={<span className="text-2xl font-bold text-black">{modalTitle}</span>}
      {...modalProps}
    >
      <ConfigProvider theme={{ components: { Form: { itemMarginBottom: 12 } } }}>
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          {...formProps}
        >
          {children}
        </Form>
      </ConfigProvider>
    </Modal>
  )
}
