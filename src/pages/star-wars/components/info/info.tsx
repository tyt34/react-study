import { useParams } from 'react-router-dom'
import Category from '../category/category'
import NavigationStar from '../navigation-star/navigation-star'
import RightPanelStar from '../right-panel-star/right-panel-star'

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
        <RightPanelStar
          type={type ? type : ''}
          subType={subType ? subType : ''}
        />
      </div>
    </>
  )
}
