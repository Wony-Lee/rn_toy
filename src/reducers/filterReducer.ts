import {createSlice} from '@reduxjs/toolkit'

interface ConfigState {
  startDate?: string
  endDate?: string
}

interface FilterOption {
  label: string
  value: string
}

interface FilterOptions {
  label?: string
  type?: string
  dateTime?: string
  config?: ConfigState
  options?: FilterOption[]
}

interface FiltersState {
  value?: string
  type?: string
  options: FilterOptions[]
}

export interface FilterState {
  filterItem?: FiltersState[]
}

const initialState: FilterState = {}

export const filterSlice = createSlice({
  name: 'filterList',
  initialState,
  reducers: {},
})

export default filterSlice
