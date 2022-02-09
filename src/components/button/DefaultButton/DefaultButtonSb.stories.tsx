import DefaultButton from './DefaultButton';

export default {
  title: "components|Button|DefaultButton",
  component: DefaultButton
}

export const defaultButton = () => {
  return(
    <DefaultButton content={`테스트`} backgroundColor='blue' fontColor='white'/>
  )
}

defaultButton.story = {
  name:"DefaultButton"
}