/*
 * Common api utility functions
 *
 * @author: cristian maschio
 */

async function handlePromise(promise) {
  try {
    const result = await promise
    if (!result || result.ok === false) {
      throw new Error(result.url)
    }
    return await result.json()
  } catch (error) {
    console.warn(error)
  }
}

export { handlePromise }
