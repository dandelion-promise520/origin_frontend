import { instance } from '@renderer/api/instance'
import { ApiResponse } from '@renderer/types'

import { Product } from './types'

export const getProduct = (params?: string): Promise<ApiResponse<Product[]>> => {
  return instance.get(params ? `/product?search=${params}` : `/product`)
}
