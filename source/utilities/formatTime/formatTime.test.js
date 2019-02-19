import formatTime from '@/utilities/formatTime'

it('formatTime() parses correctly', () => {
  /* eslint-disable no-mixed-operators */
  expect(formatTime(
    (60 * 60 * 24) * 2 + // 2 days
    (60 * 60) * 8 + // 8 hours
    (60) * 2 + // 2 minutes
    48 // 48 seconds
  )).toEqual('2dy, 8hr, 2min, 48sec')
})
