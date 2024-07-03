import {Component} from 'react'
import {
  BgContainer,
  Input,
  ColorInput,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    isTabActive: gradientDirectionsList[0].directionId,
    gradientDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    generated: false,
  }

  clickTabItem = directionId => {
    const selectedDirection = gradientDirectionsList.find(
      eachItem => eachItem.directionId === directionId,
    )
    this.setState({
      isTabActive: directionId,
      gradientDirection: selectedDirection.value,
    })
  }

  onGenerate = () => {
    this.setState({generated: true})
  }

  onChangeOfColor1 = event => {
    this.setState({color1: event.target.value, generated: false})
  }

  onChangeOfColor2 = event => {
    this.setState({color2: event.target.value, generated: false})
  }

  render() {
    const {
      isTabActive,
      gradientDirection,
      color1,
      color2,
      generated,
    } = this.state

    return (
      <BgContainer
        data-testid="gradientGenerator"
        direction={gradientDirection}
        color1={color1}
        color2={color2}
        generated={generated}
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <ul>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              eachItem={eachItem}
              isTabActive={isTabActive === eachItem.directionId}
              onClick={this.clickTabItem}
            />
          ))}
        </ul>
        <p>Pick the Colors</p>
        <ColorInput>
          <div>
            <p>{color1}</p>
            <Input
              type="color"
              value={color1}
              onChange={this.onChangeOfColor1}
            />
          </div>
          <div>
            <p>{color2}</p>
            <Input
              type="color"
              value={color2}
              onChange={this.onChangeOfColor2}
            />
          </div>
        </ColorInput>
        <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
      </BgContainer>
    )
  }
}

export default GradientGenerator
