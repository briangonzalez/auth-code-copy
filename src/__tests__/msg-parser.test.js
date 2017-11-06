import { splitAndFindCode, getCode, getSenderName } from '../msg-parser'

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

test('getSenderName', () => {
  expect(getSenderName(
    'Your Acme code is 123456',
    [
      'acme',
      'amazon'
    ]
  )).toBe('acme')

  expect(getSenderName(
    'Your NoName Inc. code is 123456',
    [
      'acme',
      'amazon'
    ]
  )).toBeUndefined()
})
