import { useNavigate } from 'react-router-dom'
import { pages } from '../app/config-pages'

export const useMoveMain = (page = pages.nav.path) => {
  const navigate = useNavigate()

  const changePage = (str: string = pages.nav.path): void => {
    navigate(str)
  }

  return changePage
}
