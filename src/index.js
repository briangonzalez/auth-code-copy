import { patterns } from './patterns'
import { getCode } from './get-code'

import imessage from 'osa-imessage'
import clipboardy from 'clipboardy'

const noop = () => {}

export const listen = (cb = noop) => {
  console.log('Listening for auth codes...')

  imessage.listen().on('message', (msg) => {
    if (msg.fromMe) return
    const text = msg.text
    const code = getCode(text, patterns)

    if (code) {
      console.log(`Copied "${code}" to your clipboard`)
      clipboardy.writeSync(code.toString())
      cb(code)
    }
  })
}
