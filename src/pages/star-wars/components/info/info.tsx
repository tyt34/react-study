import { useParams } from 'react-router-dom'
import Category from '../category/category'
import Details from '../details/details'
import NavigationStar from '../navigation-star/navigation-star'

export const Info = () => {
  const { type, subType } = useParams()
  return (
    <>
      <NavigationStar type={type ? type : ''} />
      <div className="star__grid">
        <Category
          type={type ? type : ''}
          subType={subType ? subType : ''}
        />
        <Details
          type={type ? type : ''}
          subType={subType ? subType : ''}
        />
      </div>
    </>
  )
}
