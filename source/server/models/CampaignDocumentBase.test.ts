/** @jest-environment node */
/* eslint-disable max-classes-per-file */
import { DocumentType, getModelForClass, prop } from '@typegoose/typegoose'
import { Campaign, Campaigns } from '~/server/models/Campaign'
import {
	CampaignDocumentBase, CampaignHelpers, ICampaignDocumentBaseData,
} from '~/server/models/CampaignDocumentBase'

process.env.TEST_SUITE = 'models-CampaignDocumentBase'

class Foo extends CampaignDocumentBase<ICampaignDocumentBaseData & { foo: string }> {
	@prop()
	foo?: string = 'foo'
}

// @ts-expect-error - stupid
const Foos = getModelForClass<CampaignDocumentBase, CampaignHelpers>(Foo)
let campaign1: DocumentType<Campaign>
let campaign2: DocumentType<Campaign>

beforeEach(async () => {
	[campaign1, campaign2] = await Campaigns.create([
		{ subdomain: 'foo' },
		{ subdomain: 'bar' },
	])
	await Foos.create([
		{ campaign: campaign1, foo: 'foo1', slug: 'foo1', title: 'Foo 1' },
		{ campaign: campaign2, foo: 'foo2', slug: 'foo2', title: 'Foo 2' },
	])
})

afterEach(async () => {
	await Foos.deleteMany({})
})

test('subclasses can create', async () => {
	expect(await Foos.countDocuments()).toBe(2)
})

test('campaign, slug, and title are required', async () => {
	await expect(() => Foos.create({ foo: 'foo3' }))
		.rejects.toThrow(/`title`.*`slug`.*`campaign`.*is required/)
})

test('campaign autoPopulates', async () => {
	const foo = await Foos.findOne({ slug: 'foo1' })
	expect(foo.campaign).toReference(campaign1)
	expect(foo.campaign.id).toBeTruthy()
	expect(foo.campaign.subdomain).toEqual(campaign1.subdomain)
})

test('subclasses can filter', async () => {
	let found = await Foos.find().byCampaign([campaign1])
	expect(found).toHaveLength(1)
	expect(found[0].campaign).toReference(campaign1)

	found = await Foos.find().byCampaign([])
	expect(found).toHaveLength(0)

	found = await Foos.find().byCampaign([campaign1, campaign2])
	expect(found).toHaveLength(2)
	expect(found[0].campaign).toReference(campaign1)
	expect(found[1].campaign).toReference(campaign2)
})
