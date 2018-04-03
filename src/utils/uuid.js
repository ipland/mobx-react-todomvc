export default function uuid () {
  return Array.from({ length: 32 })
    .map(function random (random = Math.random() * 16 | 0, i) {
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        return '-' + (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16)
      }

      return random.toString(16)
    }).join('')
}
