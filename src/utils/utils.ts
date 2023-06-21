import { ApiStarWars, IDataStarWars } from '../api'

export function getUniqueId(parts: number): string {
  const stringArr = []
  for (let i = 0; i < parts; i++) {
    const S4 = (((1 + Math.random()) * 0x10000) | 0)
      .toString(16)
      .substring(1)
    stringArr.push(S4)
  }
  return stringArr.join('-')
}

export const transformCategory = (
  oldNameCategory: IDataStarWars
): ApiStarWars => {
  if (oldNameCategory.toLowerCase() === 'things') {
    return 'people/'
  }
  if (oldNameCategory.toLowerCase() === 'planets') {
    return 'planets/'
  }
  if (oldNameCategory.toLowerCase() === 'starships') {
    return 'starships/'
  }
  return 'people/'
}

/**
 * Функция для трансформации запроса, так как в API для starships неправильные id.
 * Например:
 * Death Star приходит 4-ой в списке,
 * но при обращение к id = 4, приходят данные другого starship
 */
export const transformDetail = (
  subType: number,
  type: string
): number => {
  console.log({ subType, type })
  if (subType === 4 && type === 'starships') {
    return 9
  }
  if (subType === 4 && type === 'starships') {
    return 9
  }
  if (subType === 5 && type === 'starships') {
    return 10
  }
  if (subType === 6 && type === 'starships') {
    return 11
  }
  if (subType === 7 && type === 'starships') {
    return 12
  }
  if (subType === 8 && type === 'starships') {
    return 13
  }
  if (subType === 9 && type === 'starships') {
    return 15
  }
  if (subType === 10 && type === 'starships') {
    return 17
  }

  if (type === 'things' || type === 'planets') {
    const result = subType
    console.log({ result })
    return result
  }
  const result = subType + 1
  console.log({ result })
  return result
}

/**
 * Рекурсивная функция для вычисления числа фибаначи
 * @param n
 * @returns
 */
export const fib = (n: number): number => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

/**
 * Фибаначи с помощью reduce по массиву
 */
export const fibReduceArr = (n: number): number => {
  const arrN = Array(n + 1).fill(0)
  const result = arrN
    .reduce((acc, _, index) => {
      if (index < 2) {
        return acc.concat(index)
      }
      const sum = acc[index - 1] + acc[index - 2]
      return acc.concat(sum)
    }, [])
    .at(-1)
  return result
}

type fibObjType = {
  result: number
  prevOneStep: number
  prevTwoStep: number
}

/**
 * Фибаначи с помощью reduce с использованием объекта
 */
export const fibReduceObj = (n: number): number => {
  const arrN = Array(n + 1).fill(0)
  const result = arrN.reduce(
    (acc: fibObjType, _, index) => {
      if (index === 1) {
        return {
          result: 1,
          prevOneStep: 0,
          prevTwoStep: 0
        }
      }

      return {
        result: acc.result + acc.prevOneStep,
        prevOneStep: acc.result,
        prevTwoStep: acc.prevOneStep
      }
    },
    { result: 0, prevOneStep: 0, prevTwoStep: 0 }
  )
  return result.result
}
