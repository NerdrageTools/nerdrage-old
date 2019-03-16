/* eslint-disable object-property-newline,sort-keys */
export default {
  children: [
    { title: 'Descriptors', children: [{ columns: 3, type: 'Descriptor' }] },
    { title: 'Attributes', children: [{ columns: 4, type: 'Attribute' }] },
    { columns: 3, children: [
      { colSpan: 1, children: [
        { title: 'Traits', children: [{ type: 'Trait' }] },
        { title: 'Resources', children: [{ type: 'Resource' }] },
      ] },
      { colSpan: 2, children: [
        { title: 'Skills', children: [{ columns: 2, type: 'Skill' }] },
        { title: 'Items', children: [{ columns: 1, type: 'Item' }] },
        { title: 'Spells', children: [{ columns: 1, type: 'Spell' }] },
      ] },
    ] },
  ],
}
/* eslint-enable object-property-newline,sort-keys */
