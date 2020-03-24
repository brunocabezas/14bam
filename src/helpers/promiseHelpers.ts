// Returns a promise that will resolve the data argument immediately
export const resolvedPromise = (data: any) =>
  new Promise((resolve, reject) => {
    resolve(data)
  })
