// usage example:
// var a = ['a', 1, 'a', 2, '1'];
// var unique = a.filter( onlyUnique );
export function onlyUnique (value: string, index: number, self: string[]) {
  return self.indexOf(value) === index
}

export function flatten (arr : []) {
  return [].concat(...arr)
}
