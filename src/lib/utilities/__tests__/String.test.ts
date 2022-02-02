import { sortByKeys } from '@lib/utilities/String'

describe('utilities', () => {
  describe('String', () => {
    describe('sortByKeys', () => {
      it('sorts the keys of an shallow object', () => {
        const input = { b: 2, a: 1 } // eslint-disable-line sort-keys
        const expected = { a: 1, b: 2 }
        expect(sortByKeys(input)).toEqual(expected)
      })

      it('sorts the keys of a deep object', () => {
        const input = { d: { b: 2, a: 1 }, c: 3 } // eslint-disable-line sort-keys
        const expected = { c: 3, d: { a: 1, b: 2 } }
        expect(sortByKeys(input)).toEqual(expected)
      })

      it('sorts arrays objects', () => {
        const input = [{ d: { b: 2, a: 1 } }, { c: 3 }] // eslint-disable-line sort-keys
        const expected = [{ c: 3 }, { d: { a: 1, b: 2 } }]
        expect(sortByKeys(input)).toEqual(expected)
      })
    })
  })
})
