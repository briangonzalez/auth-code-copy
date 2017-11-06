import { patterns, potentialSenders } from './search-data'
import { getCode, getSenderName } from './msg-parser'

import imessage from 'osa-imessage'
import clipboardy from 'clipboardy'
import ora from 'ora'

const noop = () => {}

export const listen = (cb = noop) => {
  const listeningText = 'Listening for codes...'
  const spinner = ora(listeningText).start()

  imessage.listen().on('message', (msg) => {
    if (msg.fromMe) return
    const text = msg.text
    const code = getCode(text, patterns)

    if (code) {
      const sender = getSenderName(text, potentialSenders)
      spinner.succeed(`Copied '${code}'${sender ? ` from ${sender} ` : ''}to your clipboard`)
      spinner.start()
      spinner.text = listeningText

      clipboardy.writeSync(code.toString())
      cb(null, {
        code,
        text: msg.text,
        sender
      })
    }
  })
}
