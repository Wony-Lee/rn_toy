import {createSlice} from '@reduxjs/toolkit'

export interface SampleState {
  sample: string
}

const initialState: SampleState = {
  sample: 'Hello World',
}

export const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {},
})

export default sampleSlice
