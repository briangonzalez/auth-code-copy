export const splitAndFindCode = (text, pattern) => {
  text = text.toLowerCase()
  const msgParts = text.split(pattern) // [ '123456', 'is your code.' ]
  if (msgParts.length === 1) return // If the msg wasn't split, return.

  const code = msgParts
    .find(part => {
      const chars = part.trim().split('')
      return chars.length && chars.every(p => !isNaN(p))
    })

  if (code) return code.trim()
}

export const getCode = (text, patterns) => {
  const code = patterns
    .map(pattern => splitAndFindCode(text, pattern))
    .find(code => code)
  return code
}

export const getSenderName = (text, potentialSenders) => {
  text = text.toLowerCase()
  return potentialSenders.find(s => text.includes(s))
}
