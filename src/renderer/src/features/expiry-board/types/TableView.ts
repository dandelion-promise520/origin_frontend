import { UseQueryResult } from '@tanstack/react-query'

import { Product } from '../api/types'

export type ProductQueryViewState = Pick<
  UseQueryResult<Product[], Error>,
  'data' | 'isPending' | 'error'
>

export interface TableViewProps extends ProductQueryViewState {}

export interface CardViewProps extends ProductQueryViewState {}
