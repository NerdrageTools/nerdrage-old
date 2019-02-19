import setPathValue from '@/utilities/setPathValue'

describe('utilities/object/setPathValue()', () => {
  it('sets nested property values on simple objects', () => {
    const object = { parent: { child: { grandchild: 'Frank' } } }

    setPathValue(object, 'parent.child.grandchild', 'Sue')
    expect(object.parent.child.grandchild).toEqual('Sue')

    setPathValue(object, 'parent.child.foo', 'Foo')
    expect(object.parent.child.foo).toEqual('Foo')
  })
  it('sets nested property values with arrays', () => {
    const array = [0, [0, 1, [0, 1, 2]]]

    setPathValue(array, '1.2.3', 'Foo')
    expect(array).toEqual([0, [0, 1, [0, 1, 2, 'Foo']]])

    setPathValue(array, '[1].2[0]', 'Foo')
    expect(array).toEqual([0, [0, 1, ['Foo', 1, 2, 'Foo']]])
  })
})
