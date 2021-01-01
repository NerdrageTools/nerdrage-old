import Campaign from './Campaign'

describe('Campaign model', () => {
	const OWNER = 'bbbbbbbbbbbb'
	const EDITOR = 'aaaaaaaaaaaa'
	const PLAYER = 'cccccccccccc'
	const OTHER = 'dddddddddddd'
	let campaign

	beforeEach(() => {
		campaign = new Campaign({
			editors: [EDITOR],
			owners: [OWNER],
			players: [PLAYER],
		})
	})

	it('isEditableBy()', () => {
		expect(campaign.isEditableBy(OWNER)).toBe(true)
		expect(campaign.isEditableBy(EDITOR)).toBe(true)
		expect(campaign.isEditableBy(PLAYER)).toBe(false)
		expect(campaign.isEditableBy(OTHER)).toBe(false)
	})
	it('isVisibleTo()', () => {
		campaign.secret = false
		expect(campaign.isVisibleTo(OWNER)).toBe(true)
		expect(campaign.isVisibleTo(EDITOR)).toBe(true)
		expect(campaign.isVisibleTo(PLAYER)).toBe(true)
		expect(campaign.isVisibleTo(OTHER)).toBe(true)

		campaign.secret = true
		expect(campaign.isVisibleTo(OWNER)).toBe(true)
		expect(campaign.isVisibleTo(EDITOR)).toBe(true)
		expect(campaign.isVisibleTo(PLAYER)).toBe(true)
		expect(campaign.isVisibleTo(OTHER)).toBe(false)
	})
})
