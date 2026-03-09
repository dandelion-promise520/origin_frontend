import { ModalForm } from '@renderer/components'
import { Button, Form, FormProps, Input } from 'antd'
import { JSX } from 'react'

import { batchesDetailsModalProps, FieldType } from './types'

export const BatchesDetailsModal = (props: batchesDetailsModalProps): JSX.Element => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
    props.setIsModalOpen(false)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <ModalForm formProps={{ onFinish, onFinishFailed }} modalProps={props} modalTitle="批次详情">
      <Form.Item<FieldType>
        label="名称"
        name="batch_name"
        rules={[{ required: true, message: '请输入批次名称' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="批次号"
        name="batch_code"
        rules={[{ required: true, message: '请输入商品条码' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="类别"
        name="category"
        rules={[{ required: true, message: '请输入保质期' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="到期时间"
        name="expire_date"
        rules={[{ required: true, message: '请输入生产厂商' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="状态"
        name="status"
        rules={[{ required: true, message: '请输入存储位置' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="存储位置"
        name="location"
        rules={[{ required: true, message: '请输入存储位置' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="生产厂商"
        name="manufacturer"
        rules={[{ required: true, message: '请输入存储位置' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="数量"
        name="quantity"
        rules={[{ required: true, message: '请输入数量' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit">
            删除
          </Button>
        </div>
      </Form.Item>
    </ModalForm>
  )
}
