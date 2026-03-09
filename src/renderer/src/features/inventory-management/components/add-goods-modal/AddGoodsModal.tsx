import { ModalForm } from '@renderer/components'
import { Button, Form, FormProps, Input } from 'antd'
import { JSX } from 'react'

import { AddGoodsModalProps, FieldType } from './types'

export const AddGoodsModal = (props: AddGoodsModalProps): JSX.Element => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
    props.setIsModalOpen(false)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <ModalForm formProps={{ onFinish, onFinishFailed }} modalProps={props} modalTitle="新建货物">
      <Form.Item<FieldType>
        label="名称"
        name="product_name"
        rules={[{ required: true, message: '请填写货物名称' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="商品条码"
        name="barcode"
        rules={[{ required: true, message: '请填写商品条码' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="保质期"
        name="shelf_life_days"
        rules={[{ required: true, message: '请填写货物保质期' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="生产厂商"
        name="manufacturer"
        rules={[{ required: true, message: '请填写货物生产厂商' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="存储位置"
        name="location"
        rules={[{ required: true, message: '请填写货物存储位置' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="单位"
        name="unit"
        rules={[{ required: true, message: '请填写货物单位' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit">
            新建货物
          </Button>
        </div>
      </Form.Item>
    </ModalForm>
  )
}
