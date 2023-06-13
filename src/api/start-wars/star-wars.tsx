import { transformCategory, transformDetail } from '../../utils/utils'
import {
  PlanetType,
  PlanetsType,
  StarshipType,
  StarshipsType,
  ThingType,
  ThingsType
} from './star-wars.types'

const url = 'https://swapi.dev/api/'

export type IDataStarWars = 'things' | 'planets' | 'starships'
export type ApiStarWars = 'people/' | 'planets/' | 'starships/'

export async function getDataCategory(
  typeData: IDataStarWars
): Promise<ThingsType | PlanetsType | StarshipsType> {
  const res = await fetch(url + transformCategory(typeData), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  const json = await res.json()
  return json
}

export async function getDataDetail(
  typeData: IDataStarWars,
  idDetail: string
): Promise<ThingType | PlanetType | StarshipType> {
  const res = await fetch(
    url +
      transformCategory(typeData) +
      transformDetail(+idDetail, typeData),
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
  const json = await res.json()
  return json
}
