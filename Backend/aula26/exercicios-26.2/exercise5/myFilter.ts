/**
 * a HOC Filter leva tres parametros: valor, indice e array
 * de cara da para criar um type para esses parametros
 * usando Generics.
 * Lembrando que o filter retorna um booleano (true, false)
 * e que o segundo e terceiro parâmetros são opcionais
 */

type filterCallback<T> = (value: T, index?: number, array?: T[]) => boolean

function myFilter<T> (arr: Array<T>, callback: filterCallback<T>): Array<T> {
  const newArr: Array<T> = []

  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i])
    }
  }

  return newArr
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// somente menores que 7
console.log(
  myFilter(arr, item => {
    return item < 7
  })
)

// somente pares
console.log(myFilter(arr, item => item % 2 === 0))
