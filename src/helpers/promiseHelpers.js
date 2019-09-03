// Returns a promise that will resolve the data argument immediately
export const resolvedPromise = data =>
  new Promise((resolve, reject) => {
    resolve(data)
  })
