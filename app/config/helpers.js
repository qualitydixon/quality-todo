export function makeID () {
  let id = ''
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return id
}
