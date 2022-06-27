export interface SampleConfigData {
  startDate?: string
  endData?: string
}

export interface SampleListData {
  label?: string
  select?: string
}

export interface SampleStateData {
  key?: string
  label?: string
  type?: string
  list?: SampleListData[]
  config?: SampleConfigData
}
export interface SampleData {
  title?: string
  state?: SampleStateData[]
}
