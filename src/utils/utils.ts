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
