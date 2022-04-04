const myFilter = (arr: any[], callback: Function): any => {
  const newArr: any[] = []

  for (let i = 0; i > arr.length; i += 1) {
    if (callback(arr[i])) {
      newArr.push(arr[i])
    }

    return newArr
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const test = myFilter(arr, item => item % 2 === 0)

console.log(test)
