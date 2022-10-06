export function decodedValue(values: Array<string>): number {
  const colorTable: Array<string> = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
  const numbersArray: Array<number> = values.map( color => colorTable.indexOf(color.toLowerCase()))
  
  return parseInt(numbersArray.splice(0,2).join(''));
}