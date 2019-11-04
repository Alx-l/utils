/**
 * Calls a defined callback function on each element of an array,
 * and returns an array that contains the results.
 *
 * @param callbackfn The function invoked per iteration.
 * @returns Returns a function that expects the `array` to iterate over.
 */
export function map<T, U>(func: (_: T) => U) {
  return (arr: T[]) => arr.map(func)
}

/**
 * Returns the elements of an array that meet the condition
 * specified in a callback function.
 *
 * @param callbackfn The function invoked per iteration.
 * @returns Returns a function that expects the `array` to iterate over.
 */
export function filter<T>(func: (_: T) => boolean) {
  return (arr: T[]) => arr.filter(func)
}

/**
 * Returns the elements of an array that meet the condition
 * specified in a callback function and refines type.
 *
 * @param callbackfn The function invoked per iteration.
 * @returns Returns a function that expects the `array` to iterate over.
 */
export function filterTypeGuard<T, S extends T>(func: (_: T) => _ is S) {
  return (arr: T[]) => arr.filter(func)
}

/**
 * Calls a defined callback function on each element of an array.
 * Then, flattens the result into a new array.
 * This is identical to a map followed by flat with depth 1.
 *
 * @param callbackfn The function invoked per iteration.
 * @returns Returns a function that expects the `array` to iterate over.
 */
export function flatMap<T, U>(func: (_: T) => U) {
  return (arr: T[][]) => Array.prototype.concat(...arr).map(func)
}

/**
 * Removes one level of nesting.
 *
 * @param array
 */
export function flatten<T>(arr: T[][]): T[] {
  return Array.prototype.concat(...arr)
}

/**
 * Calls the specified callback function for all the elements in an array.
 * The return value of the callback function is the accumulated result,
 * and is provided as an argument in the next call to the callback function.
 *
 * @param callbackfn The function invoked per iteration.
 * @param initialValue The initial value.
 * @returns Returns a function that expects the `array` to iterate over.
 */
export function reduce<T, U>(func: (acc: U, current: T) => U, initialValue: U) {
  return (arr: T[]) => arr.reduce((acc, current) => func(acc, current), initialValue)
}

/**
 * Reverses the elements in an Array.
 *
 * @param array
 *
 */
export function reverse<T>(arr: T[]) {
  const copy = arr.slice()

  return copy.reverse()
}

/**
 * Determines whether the specified callback function returns true for any element of an array.
 *
 * @param callbackfn A function that accepts one argument. The some method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value true, or until the end of the array.
 * @returns Returns a function that expects the `array` to iterate over.
 *
 */
export function some<T>(predicate: (item: T) => boolean) {
  return (arr: T[]) => arr.some(predicate)
}

/**
 * Determines whether all the members of an array satisfy the specified test.
 *
 * @param callbackfn A function that accepts one argument. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
 * @returns Returns a function that expects the `array` to iterate over.
 *
 */
export function every<T>(predicate: (item: T) => boolean) {
  return (arr: T[]) => arr.every(predicate)
}

/**
 * Combines two arrays.
 *
 * @param array
 * @returns Returns a function that expects the `array` array to concatenate.
 *
 *  @example
 *
 * const words = ['one', 'two']
 * const otherWords = ['three', 'four']
 * const result = concat(words)(otherWords)
 * // result === ['one', 'two', 'three', 'four]
 */
export function concat<T>(originalArr: T[]) {
  return (otherArr: T[]) => originalArr.concat(otherArr)
}

/**
 * Determines whether an array includes a certain element,
 * returning true or false as appropriate.
 *
 * @param searchElement The element to search for.
 * @param fromIndex A second optional argument to indicate the position in this array at which to begin searching for searchElement.
 * @returns Returns a function that expects the `array` to iterate over.
 *
 */
export function includes<T>(searchElement: T, fromIndex?: number) {
  return (arr: T[]) => arr.includes(searchElement, fromIndex)
}
