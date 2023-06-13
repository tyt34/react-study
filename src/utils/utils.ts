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
export const transformStarship = (oldIdStarship: number): number => {
  if (oldIdStarship === 4) {
    return 5
  }
  if (oldIdStarship === 5) {
    return 9
  }
  if (oldIdStarship === 6) {
    return 10
  }
  if (oldIdStarship === 7) {
    return 11
  }
  if (oldIdStarship === 9) {
    return 8
  }
  if (oldIdStarship === 10) {
    return 8
  }
  if (oldIdStarship === 11) {
    return 8
  }

  return oldIdStarship
}
