// const filterByName = require('./filter')
import {filterByName} from '../../utils/filter'

const array = [
  { name: "Harry Potter" },
  { name: "Lily Potter" },
  { name: "RonTer Weasley" },
  { name: "Hermione Granger" },
  { name: "Draco Malfoy" },
]
const string = 'ter'

test('should return name including ter', () => {
  expect(filterByName(array, string))
    .toEqual([{ name: "Harry Potter" }, { name: "Lily Potter" }, { name: "RonTer Weasley" }])
})