import { ModalForm } from '@renderer/components'
import { Button, Form, FormProps, Input } from 'antd'
import { JSX } from 'react'

import { AddBatchesModalProps, FieldType } from './types'

export const AddBatchesModal = (props: AddBatchesModalProps): JSX.Element => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
    props.setIsModalOpen(false)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <ModalForm formProps={{ onFinish, onFinishFailed }} modalProps={props} modalTitle="新建批次">
      <Form.Item<FieldType>
        label="名称"
        name="batch_name"
        rules={[{ required: true, message: '请输入批次名称' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="商品条码"
        name="barcode"
        rules={[{ required: true, message: '请输入商品条码' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="保质期"
        name="shelf_life_days"
        rules={[{ required: true, message: '请输入保质期' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="生产厂商"
        name="manufacturer"
        rules={[{ required: true, message: '请输入生产厂商' }]}
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
        label="数量"
        name="quantity"
        rules={[{ required: true, message: '请输入数量' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit">
            新建批次
          </Button>
        </div>
      </Form.Item>
    </ModalForm>
  )
}
