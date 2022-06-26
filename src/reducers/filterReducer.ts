import {createSlice, PayloadAction} from '@reduxjs/toolkit'

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
  selectItem: string
}

const initialState: FilterState = {
  selectItem: '',
}

export const filterSlice = createSlice({
  name: 'filterList',
  initialState,
  reducers: {
    setFilterSelectItem(state, action: PayloadAction<string>) {
      state.selectItem = action.payload
    },
  },
})

export const {setFilterSelectItem} = filterSlice.actions

export default filterSlice
