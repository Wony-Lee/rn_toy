import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface ClientSideState {
  filterOneDeps: boolean
  filterTwoDeps: boolean
}

const initialState: ClientSideState = {
  filterOneDeps: false,
  filterTwoDeps: false,
}

export const clientSlice = createSlice({
  name: 'clientSide',
  initialState,
  reducers: {
    setFilterOenDepsSwitch(state, action: PayloadAction<boolean>) {
      state.filterOneDeps = action.payload
    },
    setFilterTwoDepsSwitch(state, action: PayloadAction<boolean>) {
      state.filterTwoDeps = action.payload
    },
  },
})

export const {setFilterOenDepsSwitch, setFilterTwoDepsSwitch} =
  clientSlice.actions

export default clientSlice
