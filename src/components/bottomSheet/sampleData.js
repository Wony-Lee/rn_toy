export const sampleData = {
  title: '필터변경',
  state: [
    {
      key: 'don_id',
      label: '돈사',
      // value: 'donsa1', // list 에 select에 해당 하는 부분.
      type: 'select',
      list: [
        {
          label: '전체',
          select: '*',
        },
        {
          label: '돈사1',
          select: 'donsa1',
        },
        {
          label: '돈사2',
          select: 'donsa2',
        },
        {
          label: '돈사3',
          select: 'donsa3',
        },
      ],
    },
    {
      key: 'don_bang',
      label: '돈방',
      // value: 'don_bang1', // list에  select에 해당 하는 부분.
      type: 'select',
      list: [
        {
          label: '전체',
          select: '*',
        },
        {
          label: '돈방1',
          select: 'don_bang1',
        },
        {
          label: '돈방2',
          select: 'don_bang2',
        },
        {
          label: '돈방3',
          select: 'don_bang3',
        },
      ],
    },
    {
      label: '날짜',
      type: 'date',
      config: {
        startDate: '2022-11-12',
        endDate: '2022-12-30',
      },
    },
  ],
}
