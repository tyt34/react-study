import { reduceAsync } from 'js-coroutines'

type fibObjType = {
  result: number
  prevOneStep: number
  prevTwoStep: number
}

export const asyncFibObj = async (n: number) => {
  const arrN = Array(n + 1).fill(0)

  const result = await reduceAsync(
    arrN,
    (acc: fibObjType, _: any, index: number) => {
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
  return result
}
