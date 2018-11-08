import formatPercent from '@/utilities/toPercent'

it('formatPercent() parses correctly', () => {
  expect(formatPercent(0.123456789)).toEqual('12.34%')
  expect(formatPercent(0)).toEqual('0.00%')
})
