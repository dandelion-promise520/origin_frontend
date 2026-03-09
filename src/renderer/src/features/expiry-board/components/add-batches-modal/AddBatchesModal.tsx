import { Button, Form, FormProps, Input, Modal } from 'antd'
import { JSX } from 'react'

import { AddBatchesModalProps, FieldType } from './types'

export const AddBatchesModal = (props: AddBatchesModalProps): JSX.Element => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Modal
      footer={null}
      maskClosable={false}
      title={<span className="text-2xl font-bold text-black">批次详情</span>}
      {...props}
    >
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <div className="flex justify-end">
            <Button type="primary" htmlType="submit">
              新建批次
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}
