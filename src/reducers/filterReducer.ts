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

interface FilterSelectItem {
  [key: string]: string | number
}

export interface FilterState {
  filterItem?: FiltersState[]
  selectItem: FilterSelectItem
  filterOneDepsTitle: string
}

const initialState: FilterState = {
  filterOneDepsTitle: '',
  selectItem: {
    don_id: 'donsa1',
    don_bang: 'donbang1',
  },
}

export const filterSlice = createSlice({
  name: 'filterList',
  initialState,
  reducers: {
    setFilterSelectItem(state, action: PayloadAction<FilterSelectItem>) {
      state.selectItem = action.payload
    },
    setFilterOneDepsTitle(state, action: PayloadAction<string>) {
      state.filterOneDepsTitle = action.payload
    },
  },
})

export const {setFilterSelectItem, setFilterOneDepsTitle} = filterSlice.actions

export default filterSlice
