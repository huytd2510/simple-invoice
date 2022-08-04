export function randomString(length = 8) {
  let result = ''
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
export async function getMatchesLength(elID) {
  let index = 0

  try {
    while (true) {
      await expect(element(by.id(elID)).atIndex(index)).toExist()
      index++
    }
  } catch (error) {
    console.log('find ', index, 'matches')
  }

  return index
}
