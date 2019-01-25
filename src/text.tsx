import React from 'react'
import styled from '~/styles'

interface Props {
  text: string
}

const Text: React.FC<Props> = ({ text }) => <StyledText>{text}</StyledText>

const StyledText = styled.p`
  color: ${(props) => props.theme.color.primaryColor};
`

export default Text
