import { Header } from '../../component'
import './star-wars.scss'
import Title from './components/title/title'
import { Info } from './components/info/info'

export const StarWars = () => {
  console.log('s-w')

  return (
    <section className="star">
      <Header />
      <Title />
      <Info />
    </section>
  )
}
