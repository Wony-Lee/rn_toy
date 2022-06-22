import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import filterSlice from '../reducers/filterReducer'

const rootReducers = combineReducers({
  filterList: filterSlice.reducer,
})
const initialState = {}

const store = configureStore({
  reducer: rootReducers,
  preloadedState: initialState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
