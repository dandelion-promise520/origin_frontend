import { Flex, Table } from '@radix-ui/themes'
import { getProduct, Product } from '@renderer/api/product'
import React, { useEffect, useState } from 'react'
import './table.css'
import Title from '@renderer/components/Title'

const Schedule: React.FC = () => {
  const [rows, setRows] = useState<Product[]>([])

  useEffect(() => {
    ;(async () => {
      const res = await getProduct()
      setRows(res)
    })()
  }, [])

  const Main: React.FC = () => {
    return (
      <Flex
        p="4"
        justify="center"
        align="start"
        style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}
      >
        <Table.Root variant="surface" className="table-with-divider table-striped w-full">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>名称</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>单位</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>存储位置</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>保质期</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>条码信息</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {rows.length !== 0 ? (
              rows.map((row, index) => (
                <Table.Row key={index}>
                  <Table.RowHeaderCell>{row.product_name}</Table.RowHeaderCell>
                  <Table.Cell>{row.unit}</Table.Cell>
                  <Table.Cell>{row.location}</Table.Cell>
                  <Table.Cell>{row.shelf_life_days}</Table.Cell>
                  <Table.Cell>{row.barcode}</Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell justify="center">暂无数据</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Root>
      </Flex>
    )
  }

  return (
    <Flex direction={'column'} height="100%" width="100%">
      <Title setTableValue={setRows} />
      <Main />
    </Flex>
  )
}

export default Schedule
