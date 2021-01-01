import formatBytes from './formatBytes'

it('formatBytes() parses correctly', () => {
	expect(formatBytes(123)).toEqual('123bytes')
	expect(formatBytes((1024 * 2) + 512)).toEqual('2.5Kb')
	expect(formatBytes(1024 * 1024 * 1024 * 3.25)).toEqual('3.25Gb')
})
