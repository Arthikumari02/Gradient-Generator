import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, isTabActive, onClick} = props
  const {directionId, displayText} = eachItem

  const onClickOfButton = () => {
    onClick(directionId)
  }

  return (
    <li>
      <Button onClick={onClickOfButton} isTabActive={isTabActive}>
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
