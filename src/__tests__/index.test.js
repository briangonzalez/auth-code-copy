import { listen } from '../'
import { EventEmitter } from 'events'

import imessage from 'osa-imessage'
import clipboardy from 'clipboardy'
clipboardy.writeSync = jest.fn()

process.setMaxListeners(0) // Avoid warnings.

let messageEmitter
beforeEach(() => {
  messageEmitter = new EventEmitter()
  imessage.listen = () => messageEmitter
})

afterEach(() => {
  messageEmitter.removeAllListeners()
})

test('listen should call the callback passing the code', () => {
  const cb = jest.fn()
  listen(cb)
  messageEmitter.emit('message', { text: 'Your code is 123456' })
  expect(cb).toHaveBeenCalledWith(null, { code: '123456', text: 'Your code is 123456' })
})

test('code should be copied', () => {
  messageEmitter.emit('message', { text: 'Your code is 123456' })
  expect(clipboardy.writeSync).toHaveBeenCalledWith('123456')
})
