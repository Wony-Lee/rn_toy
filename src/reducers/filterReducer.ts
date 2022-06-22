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
  filterItem: FiltersState[]
}

const initialState: FilterState = {
  filterItem: [
    {
      value: '돈방',
      type: 'select',
      options: [
        {
          label: '돈사 #1',
          type: 'select',
          options: [
            {
              label: '전체',
              value: '*', // null or '*'
            },
            {
              label: '배기팬',
              value: 'pan',
            },
          ],
        },
        {
          dateTime: '날짜',
          type: 'date',
          config: {
            startDate: '2022-11-12',
            endDate: '2022-12-30',
          },
        },
      ],
    },
    {
      value: '돈방',
      type: 'select',
      options: [
        {
          label: '돈사 #2',
          type: 'select',
          options: [
            {
              label: '전체',
              value: '*', // null or '*'
            },
            {
              label: '배기팬',
              value: 'pan',
            },
          ],
        },
        {
          dateTime: '날짜',
          type: 'date',
          config: {
            startDate: '2022-11-12',
            endDate: '2022-12-30',
          },
        },
      ],
    },
    {
      value: '돈방',
      type: 'select',
      options: [
        {
          label: '돈사 #3',
          type: 'select',
          options: [
            {
              label: '전체',
              value: '*', // null or '*'
            },
            {
              label: '배기팬',
              value: 'pan',
            },
          ],
        },
        {
          dateTime: '날짜',
          type: 'date',
          config: {
            startDate: '2022-11-12',
            endDate: '2022-12-30',
          },
        },
      ],
    },
    {
      value: '돈방',
      type: 'select',
      options: [
        {
          label: '돈사 #4',
          type: 'select',
          options: [
            {
              label: '전체',
              value: '*', // null or '*'
            },
            {
              label: '배기팬',
              value: 'pan',
            },
          ],
        },
        {
          dateTime: '날짜',
          type: 'date',
          config: {
            startDate: '2022-11-12',
            endDate: '2022-12-30',
          },
        },
      ],
    },
  ],
}

export const filterSlice = createSlice({
  name: 'filterList',
  initialState,
  reducers: {},
})

export default filterSlice
