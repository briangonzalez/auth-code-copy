import { splitAndFindCode, getCode } from '../get-code'

test('splitAndFindCode', () => {
  expect(splitAndFindCode(
    '123456 is your code',
    /is your code/
  )).toBe('123456')

  expect(splitAndFindCode(
    'Your code is 123456',
    /your code is/
  )).toBe('123456')
})

test('getCode', () => {
  expect(getCode(
    'Your code is 123456',
    [
      /your code is/,
      /is your code/
    ]
  )).toBe('123456')
})
