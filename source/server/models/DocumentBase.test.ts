/** @jest-environment node */
/* eslint-disable max-classes-per-file */
import { getModelForClass, prop, Ref } from '@typegoose/typegoose'
import { DocumentBase, IDocumentBaseData } from '~/server/models/DocumentBase'

process.env.TEST_SUITE = 'models-DocumentBase'

const preSave = jest.fn()
class Foo extends DocumentBase<IDocumentBaseData & { foo: string }> {
	@prop()
	foo?: string = 'foo'

	@prop()
	foo2?: string

	handlePreSave() {
		preSave()
		this.foo2 = this.foo
	}
}

class Bar extends DocumentBase<IDocumentBaseData & { bar: string }> {
	@prop()
	bar?: string = 'bar'

	@prop({ default: null, ref: Foo, type: () => Foo })
	foo?: Ref<Foo> | null = null

	@prop({ default: [], ref: Foo, type: [Foo] })
	foos?: Ref<Foo>[] = []
}

const Foos = getModelForClass(Foo)
const Bars = getModelForClass(Bar)

beforeEach(async () => {
	await Foos.create([{ foo: 'foo1' }, { foo: 'foo2' }])
	await Bars.create([{ bar: 'bar1' }, { bar: 'bar2' }])
})

afterEach(async () => {
	preSave.mockReset()
	await Foos.deleteMany({})
	await Bars.deleteMany({})
})

test('subclasses can create', async () => {
	expect(await Foos.countDocuments()).toBe(2)
	expect(await Bars.countDocuments()).toBe(2)
})

test('subclasses can link/hydrate', async () => {
	const foo = await Foos.findOne({})
	const bar = await Bars.create({ foo })

	expect(bar.foo).toMatchObject({ foo: foo?.foo, id: foo?.id })
})

test('subclasses can link collections', async () => {
	const foos = await Foos.find({})
	const bar = await Bars.create({ foos })

	expect(bar.foos).toHaveLength(2)
	expect(bar.foos![0]).toMatchObject(foos[0])
	expect(bar.foos![1]).toMatchObject(foos[1])

	const fetched = await Bars.findOne({ id: bar.id }).populate('foos')

	expect(fetched!.foos).toHaveLength(2)
	expect(fetched!.foos![0]).toMatchObject(foos[0])
	expect(fetched!.foos![1]).toMatchObject(foos[1])
})

test('preSave hook', async () => {
	expect(preSave).toHaveBeenCalledTimes(2) // from `Foos.create` in beforeEach
	const foo = await Foos.findOne({})
	expect(foo!.foo2).toEqual(foo!.foo)
})

test('id exists only after save', async () => {
	const foo = new Foo({ foo: 'Foo!' })
	expect(foo.id).toBeFalsy()
	await foo.save()
	expect(foo.id).toBeTruthy()
})
